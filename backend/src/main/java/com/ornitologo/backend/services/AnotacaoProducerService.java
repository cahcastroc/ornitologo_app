package com.ornitologo.backend.services;


import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.kafka.AnotacaoProducer;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class AnotacaoProducerService {

    @Autowired
    private AnotacaoProducer producer;

    public void enviaAnotacao(AnotacaoDTO anotacaoDTO){

        if(anotacaoDTO == null){
            throw new IllegalArgumentException("Anotação em branco!");
        }

        producer.enviaAnotacao(anotacaoDTO);
    }
}
