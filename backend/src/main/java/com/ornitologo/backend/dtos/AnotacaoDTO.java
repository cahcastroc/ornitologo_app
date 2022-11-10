package com.ornitologo.backend.dtos;

import java.time.Instant;
import java.util.Objects;

import com.ornitologo.backend.entities.Anotacao;
import com.ornitologo.backend.entities.Ave;
import com.ornitologo.backend.entities.Usuario;
import com.ornitologo.backend.models.Localizacao;

public class AnotacaoDTO {
    private Long id;
    private Instant dataHorarioDoAvistamento;
    private String comentario;
    private String tamanho;
    private String corPredominante;
    private Instant criadoEm;
    private Instant atualizadoEm;
    private Ave ave;
    private Localizacao localizacao;
    private Usuario usuario;

    public AnotacaoDTO(Anotacao entity) {
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
                entity.getUsuario());
    }

    public AnotacaoDTO(Long id, Instant dataHorarioDoAvistamento, Localizacao localizacao, String comentario,
            String tamanho, String corPredominante, Instant criadoEm, Instant atualizadoEm, Ave ave, Usuario usuario) {
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
                ", usuario=" + usuario +
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
                && Objects.equals(localizacao, that.localizacao) && Objects.equals(usuario, that.usuario);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, dataHorarioDoAvistamento, comentario, tamanho, corPredominante, criadoEm, atualizadoEm,
                ave, localizacao, usuario);
    }
}
