package com.ornitologo.backend.kafka;

import com.ornitologo.backend.dtos.AnotacaoDTO;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.kafka.support.serializer.JsonSerializer;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class AnotacaoProducer {

    @Bean
    public Map<String, Object> producerConfigs() {
        Map<String, Object> props = new HashMap<>();
        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
        return props;
    }

    @Bean
    public ProducerFactory<String, AnotacaoDTO> producerFactory() {
        return new DefaultKafkaProducerFactory<>(producerConfigs());
    }

    @Bean
    public KafkaTemplate<String, AnotacaoDTO> kafkaTemplate() {
        return new KafkaTemplate<String, AnotacaoDTO>(producerFactory());
    }

    public void enviaAnotacao(AnotacaoDTO anotacaoDTO) {
        Message<AnotacaoDTO> msg = MessageBuilder.withPayload(anotacaoDTO).
                setHeader(KafkaHeaders.TOPIC, "anotacaoTopico").
                build();
        kafkaTemplate().send(msg);
    }


}
