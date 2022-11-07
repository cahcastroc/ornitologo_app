package com.ornitologo.backend.services;

import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.repositories.AnotacaoRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.util.Assert;

@ExtendWith(MockitoExtension.class)
public class AnotacaoServiceTest {
    @InjectMocks
    AnotacaoService service;

    @Mock
    AnotacaoRepository repository;

    @Test
    public void createShouldSuccessfullyCreate(){
        AnotacaoDTO body = new AnotacaoDTO();
        var response = this.service.create(body);
        Assertions.assertEquals(body, response);
    }
}
