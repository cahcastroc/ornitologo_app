package com.ornitologo.backend.services;

import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.entities.Anotacao;
import com.ornitologo.backend.entities.Ave;
import com.ornitologo.backend.entities.Usuario;
import com.ornitologo.backend.models.Localizacao;
import com.ornitologo.backend.repositories.AnotacaoRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import javax.persistence.EntityNotFoundException;
import java.time.Instant;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class AnotacaoServiceTest {
    @InjectMocks
    private AnotacaoService service;

    @Mock
    private AnotacaoRepository repository;

    private Anotacao entityBody;
    private AnotacaoDTO dto;
    @BeforeEach
    public void setUp(){
        entityBody = new Anotacao(
                1L,
                null,
                new Localizacao(),
                "Comentário teste",
                "Pequena",
                "Azul",
                Instant.now(),
                null,
                new Ave(),
                new Usuario()
        );

        dto = new AnotacaoDTO(entityBody);
    }

    @Test
    public void createShouldSuccessfullyCreate(){
        Mockito.when(this.repository.save(ArgumentMatchers.any())).thenReturn(entityBody);

        var response = this.service.create(dto);
        Assertions.assertEquals(response, dto);
    }

    @Test
    public void updateShouldSuccess(){
        AnotacaoDTO bodyDTO = new AnotacaoDTO(entityBody);
        AnotacaoDTO unchangedDTO =  new AnotacaoDTO(entityBody);
        bodyDTO.setComentario("Comentário alterado");
        bodyDTO.setAtualizadoEm(Instant.now());
        Anotacao updatedEntity = new Anotacao(bodyDTO);

        Mockito.when(this.repository.save(ArgumentMatchers.same(entityBody))).thenReturn(updatedEntity);
        Mockito.when(this.repository.findById(1L)).thenReturn(Optional.of(entityBody));

        AnotacaoDTO response = this.service.update(entityBody.getId(), bodyDTO);
        Assertions.assertNotEquals(response, unchangedDTO);
    }

    @Test
    public void updateShouldThrowWhenInvalidId(){
        AnotacaoDTO bodyDTO = new AnotacaoDTO(entityBody);
        bodyDTO.setComentario("Comentário alterado");
        bodyDTO.setAtualizadoEm(Instant.now());

        Mockito.when(this.repository.findById(2L)).thenThrow(new EntityNotFoundException("Entity not found"));

        Assertions.assertThrows(EntityNotFoundException.class, () -> this.service.update(2L, bodyDTO));
    }

    @Test
    public void deleteShouldThrowWhenInvalidId(){
        Mockito.when(this.repository.findById(2L)).thenThrow(new EntityNotFoundException("Entity not found"));
        Assertions.assertThrows(EntityNotFoundException.class, () -> this.service.delete(2L));
    }

    @Test
    public void deleteShouldSuccess(){
        Mockito.when(this.repository.findById(1L)).thenReturn(Optional.of(entityBody));
        Assertions.assertDoesNotThrow(() -> this.service.delete(1L));
    }

    @Test
    public void testSerializeUser(){
        String sample = "{ id='1', email='sus@gmail.com', nome='paulin', criadoEm='2022-11-09T15:25:56.541054Z', atualizadoEm='null'}";
        this.service.serializeUser(sample);
    }
}
