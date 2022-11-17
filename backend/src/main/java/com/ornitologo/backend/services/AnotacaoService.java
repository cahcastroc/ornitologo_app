package com.ornitologo.backend.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import com.ornitologo.backend.exceptions.DatabaseException;
import com.ornitologo.backend.exceptions.ExceptionService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.stereotype.Service;

import com.ornitologo.backend.adapters.AnotacaoAdapter;
import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.entities.Anotacao;
import com.ornitologo.backend.repositories.AnotacaoRepository;
import com.ornitologo.backend.utils.UserMapConverter;
import org.springframework.transaction.annotation.Transactional;

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
    @Transactional(readOnly = true)
    public List<AnotacaoDTO> getAllByUser(String token) {
        String decodedToken = this.decodeUserToken(token);
        Map<String, String> user = UserMapConverter.convertUserToMap(decodedToken);
        Long id = Long.valueOf(user.get("id"));
        List<Anotacao> response = this.repository.findAllByUser(id);
        return response.stream().map(item -> AnotacaoAdapter.toDto(item)).collect(Collectors.toList());
    }
    @Transactional(readOnly = true)
    public AnotacaoDTO getById(Long id) {
        Optional<Anotacao> response = this.repository.findById(id);
        return AnotacaoAdapter.toDto(
                response.orElseThrow(() -> new EntityNotFoundException(ERROR_MSG_ENTITY_NOT_FOUND)));
    }
    @Transactional
    public AnotacaoDTO create(AnotacaoDTO dto) {
        Anotacao entity = AnotacaoAdapter.toEntity(dto);
        Anotacao response = this.repository.save(entity);
        return AnotacaoAdapter.toDto(response);
    }
    @Transactional
    public AnotacaoDTO update(Long id, AnotacaoDTO dto) {
        try {
            Anotacao entity = this.repository.findById(id)
                    .orElseThrow((() -> new EntityNotFoundException(ERROR_MSG_ENTITY_NOT_FOUND)));
            BeanUtils.copyProperties(dto, entity);
            Anotacao response = this.repository.save(entity);
            return AnotacaoAdapter.toDto(response);
        }
        catch (EntityNotFoundException e){
            throw new ExceptionService("Id não encontrado" + id);
        }
    }

    public void delete(Long id) {
        try {
             this.repository.deleteById(id);
        } catch (DataIntegrityViolationException e){
            throw new DatabaseException("Violação de integridade");
        }
    }

    public String decodeUserToken(String token) {
        token = token.replace("Bearer ", "");
        return this.decoder.decode(token).getClaims().get("sub").toString();
    }
}
