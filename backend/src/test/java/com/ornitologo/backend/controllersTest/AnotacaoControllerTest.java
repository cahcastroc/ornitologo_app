package com.ornitologo.backend.controllersTest;

import com.ornitologo.backend.config.Jwks;
import com.ornitologo.backend.config.SecurityConfig;
import com.ornitologo.backend.controllers.AnotacaoController;
import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.entities.Anotacao;
import com.ornitologo.backend.entities.Ave;
import com.ornitologo.backend.entities.Usuario;
import com.ornitologo.backend.models.Localizacao;
import com.ornitologo.backend.services.AnotacaoProducerService;
import com.ornitologo.backend.services.AnotacaoService;
import com.ornitologo.backend.services.UsuarioService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.authentication;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.security.interfaces.RSAKey;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
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
    private AnotacaoDTO dto;
    private AnotacaoDTO dto2;
    @MockBean
    private AnotacaoProducerService anotacaoProducerService;
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



    @Test
    @WithMockUser()
    void deveRetornarTodasAsAnotacoes() throws Exception{

        Jwt jwt = Jwt.withTokenValue("token")
                .header("alg", "none")
                .claim("sub", "user")
                .build();
        Collection<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList("SCOPE_read");
        JwtAuthenticationToken token = new JwtAuthenticationToken(jwt, authorities);

        List<AnotacaoDTO> lista = new ArrayList<AnotacaoDTO>();
        lista.add(dto);
        lista.add(dto2);
//        List<AnotacaoDTO> lista = Arrays.asList(
//                AnotacaoDTO.builder()
//                        .id(1L)
//                        .localizacao(null)
//                        .comentario("Comentário teste")
//                        .tamanho("pequena")
//                        .corPredominante("azul")
//                        .build());
//                AnotacaoDTO.builder()
//                        .id(2L)
//                        .dataHorarioDoAvistamento(null)
//                        .localizacao(null)
//                        .comentario("Comentário teste 2")
//                        .tamanho("grande")
//                        .corPredominante("roxa")
//                        .build()
//        );
        Mockito.when(anotacaoService.getAllByUser("token")).thenReturn(lista);

        mockMvc.perform(get("/anotacoes/1").with(authentication(token)))
                .andExpect(status().isOk())
                .andExpectAll(jsonPath("$.[0].id").value(1L))
                .andExpectAll(jsonPath("$.[0].comentario").value("Comentário teste"))
                .andExpectAll(jsonPath("$.[0].tamanho").value("pequena"))
                .andExpectAll(jsonPath("$.[0].cor").value("azul"))
                .andExpectAll(jsonPath("$.[1].id").value("2L"))
                .andExpectAll(jsonPath("$.[1].comentario").value("Comentário teste 2"))
                .andExpectAll(jsonPath("$.[1].tamanho").value("grande"))
                .andExpectAll(jsonPath("$.[1].cor").value("roxa"));

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