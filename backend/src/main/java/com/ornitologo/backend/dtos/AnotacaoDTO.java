package com.ornitologo.backend.dtos;

import com.ornitologo.backend.entities.Anotacao;
import com.ornitologo.backend.entities.Ave;
import com.ornitologo.backend.entities.Usuario;
import com.ornitologo.backend.models.Localizacao;

import java.security.Timestamp;
import java.time.Instant;

public class AnotacaoDTO {
    private Long id;
    private Timestamp dataHorarioDoAvistamento;
    private String comentario;
    private String tamanho;
    private String corPredominante;
    private Instant criadoEm;
    private Instant atualizadoEm;
    private Ave ave;
    private Localizacao localizacao;
    private Usuario usuario;

    public AnotacaoDTO(Anotacao entity){
        this.id = entity.getId();
        this.dataHorarioDoAvistamento = entity.getDataHorarioDoAvistamento();
        this.comentario = entity.getComentario();
        this.tamanho = entity.getTamanho();
        this.corPredominante = entity.getCorPredominante();
        this.criadoEm = entity.getCriadoEm();
        this.atualizadoEm = entity.getAtualizadoEm();
        this.ave = entity.getAve();
        this.localizacao = entity.getLocalizacao();
        this.usuario = entity.getUsuario();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Timestamp getDataHorarioDoAvistamento() {
        return dataHorarioDoAvistamento;
    }

    public void setDataHorarioDoAvistamento(Timestamp dataHorarioDoAvistamento) {
        this.dataHorarioDoAvistamento = dataHorarioDoAvistamento;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
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

    public Localizacao getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(Localizacao localizacao) {
        this.localizacao = localizacao;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
