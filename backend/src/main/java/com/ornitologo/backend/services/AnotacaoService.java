package com.ornitologo.backend.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.stereotype.Service;

import com.ornitologo.backend.adapters.AnotacaoAdapter;
import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.entities.Anotacao;
import com.ornitologo.backend.repositories.AnotacaoRepository;
import com.ornitologo.backend.utils.UserMapConverter;

@Service
public class AnotacaoService {

    private AnotacaoRepository repository;
    private static final String ERROR_MSG_ENTITY_NOT_FOUND = "Entity not found";

    @Autowired
    private JwtDecoder decoder;

    @Autowired
    public AnotacaoService(AnotacaoRepository repository) {
        this.repository = repository;
    }

    public List<AnotacaoDTO> getAllByUser(String token) {
        String decodedToken = this.decodeUserToken(token);
        Map<String, String> user = UserMapConverter.convertUserToMap(decodedToken);
        Long id = Long.valueOf(user.get("id"));
        List<Anotacao> response = this.repository.findAllByUser(id);
        return response.stream().map(item -> AnotacaoAdapter.toDto(item)).collect(Collectors.toList());
    }

    public AnotacaoDTO getById(Long id) {
        Optional<Anotacao> response = this.repository.findById(id);
        return AnotacaoAdapter.toDto(
                response.orElseThrow(() -> new EntityNotFoundException(ERROR_MSG_ENTITY_NOT_FOUND)));
    }

    public AnotacaoDTO create(AnotacaoDTO dto) {
        Anotacao entity = AnotacaoAdapter.toEntity(dto);
        Anotacao response = this.repository.save(entity);
        return AnotacaoAdapter.toDto(response);
    }

    public AnotacaoDTO update(Long id, AnotacaoDTO dto) {
        Anotacao entity = this.repository.findById(id)
                .orElseThrow((() -> new EntityNotFoundException(ERROR_MSG_ENTITY_NOT_FOUND)));
        BeanUtils.copyProperties(dto, entity);
        Anotacao response = this.repository.save(entity);
        return AnotacaoAdapter.toDto(response);
    }

    public void delete(Long id) {
        Anotacao entity = this.repository.findById(id)
                .orElseThrow((() -> new EntityNotFoundException(ERROR_MSG_ENTITY_NOT_FOUND)));
        this.repository.deleteById(id);
    }

    public String decodeUserToken(String token) {
        token = token.replace("Bearer ", "");
        return this.decoder.decode(token).getClaims().get("sub").toString();
    }
}
