package com.ornitologo.backend.kafka;

import com.ornitologo.backend.dtos.AnotacaoDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Component;

@Component
public class AnotacaoProducer {
    @Value("${spring.kafka.anotacao-topico.name}")
    private String anotacaoTopico;
    private KafkaTemplate<String, AnotacaoDTO> anotacaoTemplate;

    public AnotacaoProducer(KafkaTemplate<String, AnotacaoDTO> template){
        this.anotacaoTemplate = template;
    }

    public void enviaAnotacao(AnotacaoDTO antacaoDto){
        Message<AnotacaoDTO> msg = MessageBuilder.withPayload(antacaoDto).
                setHeader(KafkaHeaders.TOPIC, anotacaoTopico).
                build();
        anotacaoTemplate.send(msg);
    }

}
