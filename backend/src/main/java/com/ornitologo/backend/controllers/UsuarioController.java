package com.ornitologo.backend.controllers;

import com.ornitologo.backend.dtos.LoginDTO;
import com.ornitologo.backend.dtos.UsuarioDTO;
import com.ornitologo.backend.entities.Usuario;
import com.ornitologo.backend.services.TokenService;
import com.ornitologo.backend.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService service;

    @Autowired
    private TokenService tokenService;

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDTO> findById(@PathVariable Long id) {
        UsuarioDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    public ResponseEntity<UsuarioDTO> insert(@RequestBody UsuarioDTO dto) {
        dto = service.inserir(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginDTO> login(@RequestBody UsuarioDTO dto) {
        Authentication authentication = service.login(dto);
        Usuario usuario = (Usuario) authentication.getPrincipal();
        return ResponseEntity.ok()
                .body(new LoginDTO(tokenService.gerarToken(authentication), usuario.getNome()));
    }

}
