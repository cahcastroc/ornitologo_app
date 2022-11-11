package com.ornitologo.backend.dtos;

import java.util.Objects;

import com.ornitologo.backend.entities.Ave;

public class AveDTO {

    private String nomePopular;
    private String nomeCientifico;
    private String descricao;

    public AveDTO() {
    }

    public AveDTO(Ave ave) {
        this.nomeCientifico = ave.getNomeCientifico();
        this.nomePopular = ave.getNomePopular();
        this.descricao = ave.getDescricao();
    }

    public AveDTO(String nomePopular, String nomeCientifico, String descricao) {
        this.nomePopular = nomePopular;
        this.nomeCientifico = nomeCientifico;
        this.descricao = descricao;
    }

    public String getNomePopular() {
        return nomePopular;
    }

    public void setNomePopular(String nomePopular) {
        this.nomePopular = nomePopular;
    }

    public String getNomeCientifico() {
        return nomeCientifico;
    }

    public void setNomeCientifico(String nomeCientifico) {
        this.nomeCientifico = nomeCientifico;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        AveDTO aveDTO = (AveDTO) o;
        return Objects.equals(getNomePopular(), aveDTO.getNomePopular())
                && Objects.equals(getNomeCientifico(), aveDTO.getNomeCientifico())
                && Objects.equals(getDescricao(), aveDTO.getDescricao());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getNomePopular(), getNomeCientifico(), getDescricao());
    }
}
