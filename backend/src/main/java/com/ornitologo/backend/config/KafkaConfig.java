package com.ornitologo.backend.config;

import org.springframework.context.annotation.Configuration;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.config.TopicBuilder;


@Configuration
public class KafkaConfig {
    @Value("${spring.kafka.anotacao-topico.name}")
    private String anotacaoTopico;

    @Bean
    NewTopic criaAnotacaoTopic(){
        return TopicBuilder.
                name(anotacaoTopico).
                build();
    }

}
