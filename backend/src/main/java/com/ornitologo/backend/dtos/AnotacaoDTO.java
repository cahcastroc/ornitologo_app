package com.ornitologo.backend.dtos;

import java.time.Instant;
import java.util.Objects;

import com.ornitologo.backend.models.Localizacao;
import lombok.Builder;


public class AnotacaoDTO {
    private Long id;
    private Instant dataHorarioDoAvistamento;
    private String comentario;
    private String tamanho;
    private String corPredominante;
    private Instant criadoEm;
    private Instant atualizadoEm;
    private AveDTO ave;
    private Localizacao localizacao;
    private Long usuarioId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }

    public Instant getDataHorarioDoAvistamento() {
        return dataHorarioDoAvistamento;
    }

    public void setDataHorarioDoAvistamento(Instant dataHorarioDoAvistamento) {
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

    public Localizacao getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(Localizacao localizacao) {
        this.localizacao = localizacao;
    }

    public AveDTO getAve() {
        return ave;
    }

    public void setAve(AveDTO ave) {
        this.ave = ave;
    }

    @Override
    public String toString() {
        return "AnotacaoDTO{" +
                "id=" + id +
                ", dataHorarioDoAvistamento=" + dataHorarioDoAvistamento +
                ", comentario='" + comentario + '\'' +
                ", tamanho='" + tamanho + '\'' +
                ", corPredominante='" + corPredominante + '\'' +
                ", criadoEm=" + criadoEm +
                ", atualizadoEm=" + atualizadoEm +
                ", ave=" + ave +
                ", localizacao=" + localizacao +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        AnotacaoDTO that = (AnotacaoDTO) o;
        return Objects.equals(id, that.id) && Objects.equals(dataHorarioDoAvistamento, that.dataHorarioDoAvistamento)
                && Objects.equals(comentario, that.comentario) && Objects.equals(tamanho, that.tamanho)
                && Objects.equals(corPredominante, that.corPredominante) && Objects.equals(criadoEm, that.criadoEm)
                && Objects.equals(atualizadoEm, that.atualizadoEm) && Objects.equals(ave, that.ave)
                && Objects.equals(localizacao, that.localizacao) && Objects.equals(usuarioId, that.usuarioId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, dataHorarioDoAvistamento, comentario, tamanho, corPredominante, criadoEm, atualizadoEm,
                ave, localizacao, usuarioId);
    }

}
