package com.ornitologo.backend.kafka;

import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.entities.Anotacao;
import com.ornitologo.backend.repositories.AnotacaoRepository;
import lombok.AllArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;


@AllArgsConstructor
@Service
public class AnotacaoConsumer {
    private AnotacaoRepository anotacaoRepository;

    @KafkaListener(topics = "${spring.kafka.anotacao-topico.name}", groupId = "${spring.kafka.consumer.group-id}")
    public void consomeAnotacao(AnotacaoDTO anotacaoDto) {
        Anotacao anotacao = new Anotacao(anotacaoDto);
        anotacaoRepository.save(anotacao);
    }

}
