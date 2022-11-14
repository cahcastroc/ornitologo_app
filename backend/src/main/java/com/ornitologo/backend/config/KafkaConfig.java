package com.ornitologo.backend.config;

import com.ornitologo.backend.dtos.AnotacaoDTO;
import org.apache.kafka.clients.admin.NewTopic;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.support.serializer.JsonDeserializer;

import java.util.HashMap;
import java.util.Map;

@Configuration
@EnableKafka
public class KafkaConfig {
        @Bean
        NewTopic criaAnotacaoTopic() {
                return TopicBuilder.name("anotacaoTopico").build();
        }

        @Bean
        public ConsumerFactory<String, AnotacaoDTO> consumerFactory() {
                Map<String, Object> props = new HashMap<>();
                props.put(
                                ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG,
                                "localhost:9092");
                props.put(
                                ConsumerConfig.GROUP_ID_CONFIG,
                                "myGroup");
                props.put(
                                ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG,
                                StringDeserializer.class);
                props.put(
                                ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG,
                                JsonDeserializer.class);
                props.put(JsonDeserializer.TRUSTED_PACKAGES, "*");
                return new DefaultKafkaConsumerFactory<>(props);
        }

        @Bean
        public ConcurrentKafkaListenerContainerFactory<String, AnotacaoDTO> kafkaListenerContainerFactory() {

                ConcurrentKafkaListenerContainerFactory<String, AnotacaoDTO> factory = new ConcurrentKafkaListenerContainerFactory<>();
                factory.setConsumerFactory(consumerFactory());
                return factory;
        }

}
