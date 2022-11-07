package com.ornitologo.backend.services;

import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.entities.Anotacao;
import com.ornitologo.backend.entities.Ave;
import com.ornitologo.backend.entities.Usuario;
import com.ornitologo.backend.models.Localizacao;
import com.ornitologo.backend.repositories.AnotacaoRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.Instant;
import java.util.Date;

@ExtendWith(MockitoExtension.class)
public class AnotacaoServiceTest {
    @InjectMocks
    AnotacaoService service;

    @Mock
    AnotacaoRepository repository;

    @Test
    public void createShouldSuccessfullyCreate(){
        Anotacao entityBody = new Anotacao(
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

        AnotacaoDTO dto = new AnotacaoDTO(entityBody);

        Mockito.when(this.repository.save(ArgumentMatchers.any())).thenReturn(entityBody);

        var response = this.service.create(dto);
        Assertions.assertEquals(response, dto);
    }
}
