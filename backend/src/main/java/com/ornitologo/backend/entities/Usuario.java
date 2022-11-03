package com.ornitologo.backend.entities;

import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

@Entity
public class Usuario {
    @Id
    private Long id;
    private String email;
    private String senha;
    private String nome;

    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant criadoEm;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant atualizadoEm;

    public Usuario() {
    }

    public Usuario(String email, String senha, String nome, Instant criadoEm, Instant atualizadoEm) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
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
