package com.ornitologo.backend.controllers;


import com.ornitologo.backend.dtos.AveDTO;
import com.ornitologo.backend.services.AveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value ="/aves")
public class AveController {

    @Autowired
    private AveService aveService;

    @GetMapping
    public ResponseEntity<List<AveDTO>> listarTodos(
            @RequestParam (required = false) String nome){

        List<AveDTO> listaAves = aveService.listarTodos(nome);

        return ResponseEntity.ok(listaAves);
    }

    @PostMapping
    public ResponseEntity<AveDTO> insereAve(@RequestBody AveDTO aveDTO){
        aveDTO = aveService.insereAve(aveDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(aveDTO);

    }



}
