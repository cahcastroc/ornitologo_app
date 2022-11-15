package com.ornitologo.backend.controllersTest;

import com.ornitologo.backend.config.Jwks;
import com.ornitologo.backend.config.SecurityConfig;
import com.ornitologo.backend.controllers.AnotacaoController;
import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.entities.Anotacao;
import com.ornitologo.backend.entities.Ave;
import com.ornitologo.backend.entities.Usuario;
import com.ornitologo.backend.kafka.AnotacaoProducer;
import com.ornitologo.backend.models.Localizacao;
import com.ornitologo.backend.services.AnotacaoProducerService;
import com.ornitologo.backend.services.AnotacaoService;
import com.ornitologo.backend.services.UsuarioService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.stubbing.OngoingStubbing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.RequestHeader;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.authentication;

import java.security.interfaces.RSAKey;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.jwt;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = AnotacaoController.class)
@Import(SecurityConfig.class)
class AnotacaoControllerTest {

    @MockBean
    private AnotacaoService anotacaoService;
    @Autowired
    private MockMvc mockMvc;
    private static AnotacaoDTO dto;
    private static AnotacaoDTO dto2;
    @MockBean
    private AnotacaoProducerService anotacaoProducerService;
    @MockBean
    private AnotacaoProducer producer;
    @MockBean
    private UsuarioService  usuarioService;


    @BeforeEach
    public void setUp(){
        Anotacao entityBody =  Anotacao.builder()
                        .id(1L)
                        .comentario("Comentário teste")
                        .tamanho("pequena")
                        .corPredominante("azul")
                .usuario(new Usuario(1L,"nicoli@nicoli.com.br",null,null,null,null))
                        .build();

        dto = new AnotacaoDTO(entityBody);

        Anotacao entityBody2 =Anotacao.builder()
                .id(2L)
                .comentario("Comentário teste 2")
                .tamanho("grande")
                .corPredominante("roxa")
                .usuario(new Usuario(1L,"nicoli@nicoli.com.br",null,null,null,null))
                .build();

        dto2 = new AnotacaoDTO(entityBody2);
    }



//    @Test
//    @WithMockUser
//    void deveRetornarTodasAsAnotacoes() throws Exception{
//
//        Jwt jwt = Jwt.withTokenValue("token")
//                .header("alg", "none")
//                .claim("sub", "user")
//                .build();
//        Collection<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList("SCOPE_read");
//        JwtAuthenticationToken token = new JwtAuthenticationToken(jwt, authorities);
//
//        List<AnotacaoDTO> lista = new ArrayList<AnotacaoDTO>();
//        lista.add(dto);
//        lista.add(dto2);
//
//        Mockito.when(anotacaoService.getAllByUser("token")).thenReturn(lista);
//
//        mockMvc.perform(get("/anotacoes/").header("Authorization", token))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andExpectAll(jsonPath("$.[0].id").value(1L))
//                .andExpectAll(jsonPath("$.[0].comentario").value("Comentário teste"))
//                .andExpectAll(jsonPath("$.[0].tamanho").value("pequena"))
//                .andExpectAll(jsonPath("$.[0].cor").value("azul"))
//                .andExpectAll(jsonPath("$.[1].id").value("2L"))
//                .andExpectAll(jsonPath("$.[1].comentario").value("Comentário teste 2"))
//                .andExpectAll(jsonPath("$.[1].tamanho").value("grande"))
//                .andExpectAll(jsonPath("$.[1].cor").value("roxa"));
//
//            }

    @Test
    @WithMockUser
    void getById() throws Exception {

        List<AnotacaoDTO> list = new ArrayList<AnotacaoDTO>();
        list.add(dto);
        list.add(dto2);
        Mockito.when(anotacaoService.getById(1L)).thenReturn(list.get(0));

        mockMvc.perform(get("/anotacoes/1")).andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpectAll(jsonPath("$.id").value("1"))
                .andExpectAll(jsonPath("$.comentario").value("Comentário teste"))
                .andExpectAll(jsonPath("$.tamanho").value("pequena"))
                .andExpectAll(jsonPath("$.corPredominante").value("azul"));
    }

//    @Test
//    @WithMockUser
//    void create() throws Exception {
//
//       var json= new Gson().toJson(dto2);
//
//       Mockito.when(anotacaoService.create(dto2)).thenReturn();
//
//       mockMvc.perform(post("/anotacoes").contentType(MediaType.APPLICATION_JSON)
//               .accept(MediaType.APPLICATION_JSON)
//               .content(json))
//               .andExpect(MockMvcResultMatchers.status().isOk()
//                       .andExpectAll(jsonPath("$.id").value("2"))
//                       .andExpectAll(jsonPath("$.comentario").value("Comentário teste2"))
//                       .andExpectAll(jsonPath("$.tamanho").value("grande"))
//                       .andExpectAll(jsonPath("$.corPredominante").value("roxo")));
//
//
//
//    }

    @Test
    @WithMockUser
    void shouldBeUpdateAndReturn200() throws Exception{
        AnotacaoDTO dto;
        Anotacao entityBody =  Anotacao.builder()
                .id(1L)
                .comentario("Comentário teste")
                .tamanho("Grande")
                .corPredominante("vermelha")
                .build();
        dto = new AnotacaoDTO(entityBody);

        Mockito.when(anotacaoService.update(1L,dto)).thenReturn(dto);

        var json= new Gson().toJson(dto);

        mockMvc.perform(put("/anotacoes/{id}","1").contentType(MediaType.APPLICATION_JSON).content(json))
                        .andExpect(MockMvcResultMatchers.status().isOk())
                        .andExpectAll(jsonPath("$.id").value("1L"))
                        .andExpectAll(jsonPath("$.comentario").value("Comentário teste2"))
                        .andExpectAll(jsonPath("$.tamanho").value("grande"))
                        .andExpectAll(jsonPath("$.corPredominante").value("roxo"));
    }

    @Test
    void delete() {
    }
}