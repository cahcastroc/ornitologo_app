package com.ornitologo.backend.kafka;

import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.services.AnotacaoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class AnotacaoConsumer {

    @Autowired
    private AnotacaoService anotacaoService;

    @KafkaListener(topics = "anotacaoTopico", groupId = "myGroup")
    public void consomeAnotacao(AnotacaoDTO msg) {
        anotacaoService.create(msg);
    }

}
