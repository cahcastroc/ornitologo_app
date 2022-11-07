package com.ornitologo.backend.services;

import com.ornitologo.backend.dtos.UsuarioDTO;
import com.ornitologo.backend.entities.Usuario;
import com.ornitologo.backend.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;


@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    @Transactional(readOnly = true)
    public UsuarioDTO findById(Long id) {
        Optional<Usuario> obj = repository.findById(id);
        Usuario entity = obj.orElseThrow(() -> new EntityNotFoundException("Entity not found"));
        return new UsuarioDTO(entity);
    }

    @Transactional
    public UsuarioDTO inserir(UsuarioDTO dto) {
        Usuario entity = new Usuario();
        copiaDtoEntidade(dto, entity);
        entity = repository.save(entity);
        return new UsuarioDTO(entity);
    }

    private void copiaDtoEntidade(UsuarioDTO dto, Usuario entity){
        entity.setEmail(dto.getEmail());
        entity.setNome(dto.getNome());
        entity.setSenha(dto.getSenha());
    }
}
