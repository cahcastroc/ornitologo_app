package com.ornitologo.backend.model;

import javax.persistence.Embeddable;

@Embeddable
public class Localizacao {
    private String lat;
    private String longt;
    private String descricao;

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLongt() {
        return longt;
    }

    public void setLongt(String longt) {
        this.longt = longt;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

}
