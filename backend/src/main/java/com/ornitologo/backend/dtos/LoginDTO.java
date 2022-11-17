package com.ornitologo.backend.dtos;

public class LoginDTO {
    private String token;
    private String nome;
    private Long id;

    public LoginDTO() {
    }

    public LoginDTO(String token, String nome, Long id) {
        this.token = "Bearer " + token;
        this.nome = nome;
        this.id = id;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
