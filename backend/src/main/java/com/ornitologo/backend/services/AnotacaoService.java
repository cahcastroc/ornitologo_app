package com.ornitologo.backend.services;

import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.entities.Anotacao;
import com.ornitologo.backend.repositories.AnotacaoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AnotacaoService {
    private AnotacaoRepository repository;

    @Autowired
    public AnotacaoService(AnotacaoRepository repository){
        this.repository = repository;
    }

    public List<AnotacaoDTO> getAll() {
        List<Anotacao> response = this.repository.findAll();
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
}
