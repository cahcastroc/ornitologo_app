package com.ornitologo.backend.services;

import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.entities.Anotacao;
import com.ornitologo.backend.repositories.AnotacaoRepository;
import com.ornitologo.backend.utils.UserMapConverter;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
public class AnotacaoService {
    private AnotacaoRepository repository;
    @Autowired
    private JwtDecoder decoder;
    @Autowired
    public AnotacaoService(AnotacaoRepository repository){
        this.repository = repository;
    }

    public List<AnotacaoDTO> getAllByUser(String token) {
        String decodedToken = this.decodeUserToken(token);
        Map<String, String> user = UserMapConverter.serializeUser(decodedToken);
        Long id = Long.valueOf(user.get("id"));
        List<Anotacao> response = this.repository.findAllByUser(id);
        return response.stream().map(item -> new AnotacaoDTO(item)).collect(Collectors.toList());
    }

    public AnotacaoDTO getById(Long id) {
        Optional<Anotacao> response = this.repository.findById(id);
        AnotacaoDTO dto = new AnotacaoDTO(response.orElseThrow(() -> new EntityNotFoundException("Entity not found")));
        return dto;
    }

    public AnotacaoDTO create(AnotacaoDTO dto) {
        Anotacao entity = new Anotacao(dto);
        Anotacao response = this.repository.save(entity);
        return new AnotacaoDTO(response);
    }

    public AnotacaoDTO update(Long id, AnotacaoDTO dto) {
        Anotacao entity = this.repository.findById(id).orElseThrow((() -> new EntityNotFoundException("Entity not found")));
        BeanUtils.copyProperties(dto, entity);
        Anotacao response = this.repository.save(entity);
        return new AnotacaoDTO(response);
    }

    public void delete(Long id) {
        Anotacao entity = this.repository.findById(id).orElseThrow((() -> new EntityNotFoundException("Entity not found")));
        this.repository.deleteById(id);
    }

    public String decodeUserToken(String token){
        token = token.replace("Bearer ", "");
        return this.decoder.decode(token).getClaims().get("sub").toString();
    }
}
