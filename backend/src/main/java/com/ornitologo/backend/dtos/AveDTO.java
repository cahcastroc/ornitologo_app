package com.ornitologo.backend.dtos;

public class AveDTO {

    private Long id;
    private String nomePopular;
    private String nomeCientifico;
    private String descricao;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((nomePopular == null) ? 0 : nomePopular.hashCode());
        result = prime * result + ((nomeCientifico == null) ? 0 : nomeCientifico.hashCode());
        result = prime * result + ((descricao == null) ? 0 : descricao.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        AveDTO other = (AveDTO) obj;
        if (nomePopular == null) {
            if (other.nomePopular != null)
                return false;
        } else if (!nomePopular.equals(other.nomePopular))
            return false;
        if (nomeCientifico == null) {
            if (other.nomeCientifico != null)
                return false;
        } else if (!nomeCientifico.equals(other.nomeCientifico))
            return false;
        if (descricao == null) {
            if (other.descricao != null)
                return false;
        } else if (!descricao.equals(other.descricao))
            return false;
        return true;
    }

}
