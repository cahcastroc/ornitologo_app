package com.ornitologo.backend.services;


import com.ornitologo.backend.dtos.AveDTO;
import com.ornitologo.backend.entities.Ave;
import com.ornitologo.backend.repositories.AveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AveService {


    @Autowired
    private AveRepository aveRepository;

    @Transactional(readOnly = true)
    public List<AveDTO> listarTodos(String nome) {
        if(nome == null)
            nome = "";
        List <Ave> listaAves = aveRepository.buscaPorNome(nome);

        return listaAves.stream().map(aux -> new AveDTO(aux)).collect(Collectors.toList());
    }




}
