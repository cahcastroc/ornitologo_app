package com.ornitologo.backend.services;

import com.ornitologo.backend.dtos.UsuarioDTO;
import com.ornitologo.backend.entities.Usuario;
import com.ornitologo.backend.repositories.UsuarioRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
class UsuarioServiceTest {

    @InjectMocks
    private UsuarioService service;

    @Mock
    private UsuarioRepository repository;

    private long existingId;
    private long nonExistingId;
    private long dependentId;

    private Usuario usuario;

    @BeforeEach
    void setUp() throws Exception {
        existingId = 1L;
        nonExistingId = 2L;
        dependentId = 3L;
        usuario =

                Usuario
                    .builder()
                    .id(1L)
                    .email("andre@mundowap.com.br")
                    .senha("admin")
                    .nome("André")
                    .criadoEm(null)
                    .atualizadoEm(null)
                    .build();

        Mockito.when(repository.findById(existingId)).thenReturn(Optional.of(usuario));
        Mockito.when(repository.findById(nonExistingId)).thenReturn(Optional.empty());

    }

    @Test
    public void findByIdDevemRetornarUsuarioDTOQuandoIdExistir() {
        UsuarioDTO result = service.findById(existingId);
        assertNotNull(result);
    }

    @Test
    public void findByIdDevemRetornarEntityNotFoundExceptionQuandoIdNaoExistir() {
        assertThrows(EntityNotFoundException.class, () -> {
            service.findById(nonExistingId);
        });
    }
}