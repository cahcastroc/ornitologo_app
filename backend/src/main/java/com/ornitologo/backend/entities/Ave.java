package com.ornitologo.backend.entities;

import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

@Entity
public class Ave {
    @Id
    private Long id;
    private String nomePopular;
    private String nomeCientifico;
    private String corPredominante;
    private String tamanho;
    private String descricao;

    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant criadoEm;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant atualizadoEm;

    public Ave() {
    }

    public Ave(String nomePopular, String nomeCientifico, String corPredominante, String tamanho,
            String descricao, Instant criadoEm, Instant atualizadoEm) {
        this.nomePopular = nomePopular;
        this.nomeCientifico = nomeCientifico;
        this.corPredominante = corPredominante;
        this.tamanho = tamanho;
        this.descricao = descricao;
        this.criadoEm = criadoEm;
        this.atualizadoEm = atualizadoEm;
    }

    @PrePersist
    public void prePersist() {
        criadoEm = Instant.now();
    }

    @PreUpdate
    public void preUpdate() {
        atualizadoEm = Instant.now();
    }

}
