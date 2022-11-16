package com.ornitologo.backend.dtos;

public class LoginDTO {
    private String token;
    private String nome;

    public LoginDTO() {
    }

    public LoginDTO(String token, String nome) {
        this.token = "Bearer " + token;
        this.nome = nome;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

}
