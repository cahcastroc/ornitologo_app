package com.ornitologo.backend.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ornitologo.backend.adapters.AveAdapter;
import com.ornitologo.backend.dtos.AveDTO;
import com.ornitologo.backend.entities.Ave;
import com.ornitologo.backend.repositories.AveRepository;

@Service
public class AveService {

    @Autowired
    private AveRepository aveRepository;

    @Transactional(readOnly = true)
    public List<AveDTO> listarTodos(String nome) {
        if (nome == null)
            nome = "";
        List<Ave> listaAves = aveRepository.buscaPorNome(nome);

        return listaAves.stream().map(aux -> AveAdapter.toDTO(aux)).collect(Collectors.toList());
    }

    @Transactional
    public AveDTO insereAve(AveDTO aveDTO) {
        if(aveRepository)

        Ave ave = AveAdapter.toEntity(aveDTO);
        ave = aveRepository.save(ave);

        return AveAdapter.toDTO(ave);
    }

}
