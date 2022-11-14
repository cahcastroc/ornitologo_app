package com.ornitologo.backend.controllersTest;

import com.ornitologo.backend.config.SecurityConfig;
import com.ornitologo.backend.controllers.AnotacaoController;
import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.entities.Anotacao;
import com.ornitologo.backend.entities.Ave;
import com.ornitologo.backend.entities.Usuario;
import com.ornitologo.backend.models.Localizacao;
import com.ornitologo.backend.services.AnotacaoService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.jwt;

@WebMvcTest(AnotacaoController.class)
@Import(SecurityConfig.class)
class AnotacaoControllerTest {

    @MockBean
    private AnotacaoService anotacaoService;

    @Autowired
    private MockMvc mockMvc;

    private Anotacao entityBody;
    private List<AnotacaoDTO> dto;


    @BeforeEach
    public



    @Test
    @WithMockUser()
    void deveRetornarTodasAsAnotacoes() throws Exception{
        List<AnotacaoDTO> lista = Arrays.asList(
                AnotacaoDTO.builder()
                        .id(1L)
                        .dataHorarioDoAvistamento(null)
                        .localizacao(null)
                        .comentario("Comentário teste")
                        .tamanho("pequena")
                        .corPredominante("azul")
                        .ave(new Ave())
                        .usuario(new Usuario())
                        .build(),
                AnotacaoDTO.builder()
                        .id(2L)
                        .dataHorarioDoAvistamento(null)
                        .localizacao(null)
                        .comentario("Comentário teste 2")
                        .tamanho("grande")
                        .corPredominante("roxa")
                        .ave(new Ave())
                        .usuario(new Usuario())
                        .build()
        );
        Mockito.when(anotacaoService.getAllByUser(String.valueOf(jwt()))).thenReturn(lista);

        mockMvc.perform(g

            }

    @Test
    void getById() {
    }

    @Test
    void create() {
    }

    @Test
    void update() {
    }

    @Test
    void delete() {
    }
}