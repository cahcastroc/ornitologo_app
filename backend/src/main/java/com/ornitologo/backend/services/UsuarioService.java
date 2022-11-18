package com.ornitologo.backend.services;

import com.ornitologo.backend.adapters.UsuarioAdapter;
import com.ornitologo.backend.dtos.UsuarioDTO;
import com.ornitologo.backend.entities.Usuario;
import com.ornitologo.backend.exceptions.DatabaseException;
import com.ornitologo.backend.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import javax.validation.constraints.NotBlank;
import java.util.Optional;

@Service
public class UsuarioService implements UserDetailsService {

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    public UsuarioDTO findById(Long id) {
        Optional<Usuario> obj = repository.findById(id);
        Usuario entity = obj.orElseThrow(() -> new EntityNotFoundException("Entity not found"));
        return UsuarioAdapter.toDTO(entity);
    }


    public UsuarioDTO inserir(UsuarioDTO dto) {
        try {
            // encriptar a senha
            dto.setSenha(passwordEncoder.encode(dto.getSenha()));
            Usuario entity = UsuarioAdapter.toEntity(dto);

            entity = repository.save(entity);
            return UsuarioAdapter.toDTO(entity);
        }catch (DataIntegrityViolationException e){
            throw new DatabaseException("Email já cadastrado");
        }
    }

    // utilizado para encontrar ususario no banco e realizar a autenticação
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario user = repository.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("Email não encontrado");
        }
        return user;
    }

    public Authentication login(UsuarioDTO dto) throws BadCredentialsException {
        UserDetails user = loadUserByUsername(dto.getEmail());

        if (passwordEncoder.matches(dto.getSenha(), user.getPassword())) {
            return new UsernamePasswordAuthenticationToken(user, null,
                    user.getAuthorities());
        }
        throw new BadCredentialsException("Senha inválida");
    }

}
