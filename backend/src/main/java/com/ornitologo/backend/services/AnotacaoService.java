package com.ornitologo.backend.services;

import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.repositories.AnotacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnotacaoService {
    private AnotacaoRepository repository;

    @Autowired
    public AnotacaoService(AnotacaoRepository repository){
        this.repository = repository;
    }

    public List<AnotacaoDTO> getAll() {
    }

    public AnotacaoDTO getById(Long id) {
    }

    public AnotacaoDTO create(AnotacaoDTO dto) {

    }

    public AnotacaoDTO update(Long id, AnotacaoDTO dto) {
    }

    public void delete(Long id) {
    }
}
