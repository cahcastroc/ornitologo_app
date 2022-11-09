package com.ornitologo.backend.entities;

import java.security.Timestamp;
import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.models.Localizacao;

@Entity
public class Anotacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Instant dataHorarioDoAvistamento;

    @Embedded
    private Localizacao localizacao;
    private String comentario;
    private String tamanho;
    private String corPredominante;

    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant criadoEm;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant atualizadoEm;

    @ManyToOne
    @JoinColumn(name = "ave_id", nullable = false)
    private Ave ave;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    public Anotacao() {
    }

    public Anotacao(AnotacaoDTO dto) {
        this(
                dto.getId(),
                dto.getDataHorarioDoAvistamento(),
                dto.getLocalizacao(),
                dto.getComentario(),
                dto.getTamanho(),
                dto.getCorPredominante(),
                dto.getCriadoEm(),
                dto.getAtualizadoEm(),
                dto.getAve(),
                dto.getUsuario()
        );
    }

    public Anotacao(Anotacao entity) {
        this(
                entity.getId(),
                entity.getDataHorarioDoAvistamento(),
                entity.getLocalizacao(),
                entity.getComentario(),
                entity.getTamanho(),
                entity.getCorPredominante(),
                entity.getCriadoEm(),
                entity.getAtualizadoEm(),
                entity.getAve(),
                entity.getUsuario()
        );
    }

    public Anotacao(Long id, Instant dataHorarioDoAvistamento, Localizacao localizacao, String comentario, String tamanho, String corPredominante, Instant criadoEm, Instant atualizadoEm, Ave ave, Usuario usuario) {
        this.id = id;
        this.dataHorarioDoAvistamento = dataHorarioDoAvistamento;
        this.localizacao = localizacao;
        this.comentario = comentario;
        this.tamanho = tamanho;
        this.corPredominante = corPredominante;
        this.criadoEm = criadoEm;
        this.atualizadoEm = atualizadoEm;
        this.ave = ave;
        this.usuario = usuario;
    }

    public Anotacao(Instant dataHorarioDoAvistamento, Localizacao localizacao, String comentario, String tamanho, String corPredominante, Instant criadoEm, Instant atualizadoEm, Ave ave, Usuario usuario) {
        this.dataHorarioDoAvistamento = dataHorarioDoAvistamento;
        this.localizacao = localizacao;
        this.comentario = comentario;
        this.tamanho = tamanho;
        this.corPredominante = corPredominante;
        this.criadoEm = criadoEm;
        this.atualizadoEm = atualizadoEm;
        this.ave = ave;
        this.usuario = usuario;
    }

    @PrePersist
    public void prePersist() {
        criadoEm = Instant.now();
    }

    @PreUpdate
    public void preUpdate() {
        atualizadoEm = Instant.now();
    }

    public Instant getDataHorarioDoAvistamento() {
        return dataHorarioDoAvistamento;
    }

    public void setDataHorarioDoAvistamento(Instant dataHorarioDoAvistamento) {
        this.dataHorarioDoAvistamento = dataHorarioDoAvistamento;
    }

    public Localizacao getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(Localizacao localizacao) {
        this.localizacao = localizacao;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Instant getCriadoEm() {
        return criadoEm;
    }

    public void setCriadoEm(Instant criadoEm) {
        this.criadoEm = criadoEm;
    }

    public Instant getAtualizadoEm() {
        return atualizadoEm;
    }

    public void setAtualizadoEm(Instant atualizadoEm) {
        this.atualizadoEm = atualizadoEm;
    }

    public Ave getAve() {
        return ave;
    }

    public void setAve(Ave ave) {
        this.ave = ave;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Long getId() {
        return id;
    }

    public String getTamanho() {
        return tamanho;
    }

    public void setTamanho(String tamanho) {
        this.tamanho = tamanho;
    }

    public String getCorPredominante() {
        return corPredominante;
    }

    public void setCorPredominante(String corPredominante) {
        this.corPredominante = corPredominante;
    }
}
