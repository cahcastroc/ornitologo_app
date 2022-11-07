package com.ornitologo.backend.dtos;

import com.ornitologo.backend.entities.Usuario;

public class UsuarioDTO {

    private Long id;
    private String email;
    private String senha;
    private String nome;

    public UsuarioDTO() {
    }

    public UsuarioDTO(Long id, String email, String senha, String nome) {
        this.id = id;
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }

    public UsuarioDTO(Usuario entity) {
        id = entity.getId();
        email = entity.getEmail();
        senha = entity.getSenha();
        nome = entity.getNome();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
