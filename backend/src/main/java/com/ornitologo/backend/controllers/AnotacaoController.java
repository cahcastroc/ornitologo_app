package com.ornitologo.backend.controllers;

import com.ornitologo.backend.dtos.AnotacaoDTO;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/anotacoes")
public class AnotacaoController {
    private AnotacaoService service;

    @Autowired
    public AnotacaoController(AnotacaoService service){
        this.service = service;
    }

    @GetMapping()
    public ResponseEntity<List<AnotacaoDTO>> getAll(){
        List<AnotacaoDTO> response = this.service.getAll();
        return ResponseEntity.ok().body(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AnotacaoDTO> getById(@PathVariable Long id){
        AnotacaoDTO response = this.service.getById(id);
        return ResponseEntity.ok().body(response);
    }

    @PostMapping()
    public ResponseEntity<AnotacaoDTO> create(@RequestBody AnotacaoDTO dto){
        AnotacaoDTO response = this.service.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AnotacaoDTO> update(@PathVariable Long id, @RequestBody AnotacaoDTO dto){
        AnotacaoDTO response = this.service.update(id, dto);
        return ResponseEntity.ok().body(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<AnotacaoDTO> delete(@PathVariable Long id){
        this.service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
