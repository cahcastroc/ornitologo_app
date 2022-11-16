package com.ornitologo.backend.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.ornitologo.backend.adapters.UsuarioAdapter;
import com.ornitologo.backend.dtos.UsuarioDTO;
import com.ornitologo.backend.entities.Usuario;
import com.ornitologo.backend.repositories.UsuarioRepository;

@ExtendWith(SpringExtension.class)
class UsuarioServiceTest {

    @InjectMocks
    private UsuarioService service;

    @Mock
    private UsuarioRepository repository;

    @Mock
    private BCryptPasswordEncoder passwordEncoder;

    private long existingId;
    private long nonExistingId;
    private long dependentId;
    @Mock
    private Usuario newUsuario;

    @BeforeEach
    void setUp() throws Exception {
        existingId = 1L;
        nonExistingId = 2L;
        dependentId = 3L;
        newUsuario = Usuario
                .builder()
                .id(1L)
                .email("andre@mundowap.com.br")
                .senha("admin")
                .nome("André")
                .criadoEm(null)
                .atualizadoEm(null)
                .build();

        Mockito.when(repository.findById(existingId)).thenReturn(Optional.of(newUsuario));
        Mockito.when(repository.findById(nonExistingId)).thenReturn(Optional.empty());

        Mockito.when(repository.save(Mockito.any(Usuario.class))).thenReturn(newUsuario)
                .thenThrow(DataIntegrityViolationException.class);
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

    @Test
    public void insertDeveUsuarioRetornarCriado() {
        UsuarioDTO result = service.inserir(
                UsuarioAdapter.toDTO(newUsuario));
        assertNotNull(result);
    }

    @Test
    public void insertDeveRetornarExceptionUsuarioNaoCriado() {

        service.inserir(UsuarioAdapter.toDTO(newUsuario));

        DataIntegrityViolationException excp = assertThrows(DataIntegrityViolationException.class, () -> {
            service.inserir(UsuarioAdapter.toDTO(newUsuario));
        });
        assertEquals(DataIntegrityViolationException.class, excp.getClass());
    }
}