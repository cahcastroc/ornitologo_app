package com.ornitologo.backend.services;

import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.entities.Anotacao;
import com.ornitologo.backend.repositories.AnotacaoRepository;
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
        token = token.replace("Bearer ", "");
        var res = this.decoder.decode(token).getClaims().get("sub").toString();
        Map<String, String> user = this.serializeUser(res);
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

    //mover para utils
    public Map<String, String> serializeUser(String source){
        Map<String, String> map = new HashMap<>();
        List<String> keys = new ArrayList<>();
        List<String> values = new ArrayList<>();

        String keyRegex = "(\\w+)=";
        String valueRegex = "=\'(\\w+)\'";

        Pattern pattern = Pattern.compile(keyRegex);
        final Matcher keysMatched = pattern.matcher(source);
        pattern = Pattern.compile(valueRegex);
        final Matcher valueMatched = pattern.matcher(source);

        while (keysMatched.find()) {
            for (int i = 1; i <= keysMatched.groupCount(); i++) {
                keys.add(keysMatched.group(1));
            }

        }
        while (valueMatched.find()) {
            for (int i = 1; i <= valueMatched.groupCount(); i++) {
                values.add(valueMatched.group(1));
            }
        }
        for (int i = 0; i <= valueMatched.groupCount() || i <= keysMatched.groupCount(); i++) {
            map.put(keys.get(i), values.get(i));
        }

        var amogus = map.get("id");
        return map;
    }
}
