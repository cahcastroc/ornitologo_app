package com.ornitologo.backend.controllersTest;

import com.ornitologo.backend.config.Jwks;
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
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.security.interfaces.RSAKey;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.jwt;

@WebMvcTest(AnotacaoController.class)
@Import(SecurityConfig.class)
class AnotacaoControllerTest {
    private AnotacaoDTO dto;

    @MockBean
    private AnotacaoService anotacaoService;

    @Autowired
    private MockMvc mockMvc;



    @BeforeEach
    public void setUp(){
        Anotacao entityBody = new Anotacao(
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
    @WithMockUser(value = "user")
    void deveRetornarTodasAsAnotacoes() throws Exception{
        List<AnotacaoDTO> lista = new ArrayList<AnotacaoDTO>();
        lista.add(dto);
//        List<AnotacaoDTO> lista = Arrays.asList(
//                AnotacaoDTO.builder()
//                        .id(1L)
//                        .dataHorarioDoAvistamento(null)
//                        .localizacao(null)
//                        .comentario("Comentário teste")
//                        .tamanho("pequena")
//                        .corPredominante("azul")
//                        .build(),
//                AnotacaoDTO.builder()
//                        .id(2L)
//                        .dataHorarioDoAvistamento(null)
//                        .localizacao(null)
//                        .comentario("Comentário teste 2")
//                        .tamanho("grande")
//                        .corPredominante("roxa")
//                        .build()
//        );
        Mockito.when(anotacaoService.getAllByUser(jwt().toString())).thenReturn(lista);

        mockMvc.perform(get("/anotacoes")
                .with(jwt().authorities(new SimpleGrantedAuthority("SCOPE_messages"))))
                .andExpectAll(jsonPath("$.[0].id").value("1L"))
                .andExpectAll(jsonPath("$.[0].dataHorarioDoAvistamento").value(null))
                .andExpectAll(jsonPath("$.[0].localizacao").value(null))
                .andExpectAll(jsonPath("$.[0].comentario").value("Comentário teste"))
                .andExpectAll(jsonPath("$.[0].tamanho").value("pequena"))
                .andExpectAll(jsonPath("$.[0].cor").value("azul"));
//                .andExpectAll(jsonPath("$.[1].id").value("2L"))
//                .andExpectAll(jsonPath("$.[1].dataHorarioDoAvistamento").value(null))
//                .andExpectAll(jsonPath("$.[1].localizacao").value(null))
//                .andExpectAll(jsonPath("$.[1].comentario").value("Comentário teste 2"))
//                .andExpectAll(jsonPath("$.[1].tamanho").value("grande"))
//                .andExpectAll(jsonPath("$.[1].cor").value("roxa"));

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