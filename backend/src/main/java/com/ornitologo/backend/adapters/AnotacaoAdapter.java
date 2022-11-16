package com.ornitologo.backend.adapters;

import com.ornitologo.backend.dtos.AnotacaoDTO;
import com.ornitologo.backend.entities.Anotacao;

public class AnotacaoAdapter {

    public static Anotacao toEntity(AnotacaoDTO dto) {
        Anotacao entity = new Anotacao();
        entity.setDataHorarioDoAvistamento(dto.getDataHorarioDoAvistamento());
        entity.setLocalizacao(dto.getLocalizacao());
        entity.setComentario(dto.getComentario());
        entity.setTamanho(dto.getTamanho());
        entity.setCorPredominante(dto.getCorPredominante());
        entity.setCriadoEm(dto.getCriadoEm());
        entity.setAtualizadoEm(dto.getAtualizadoEm());
        entity.setAve(AveAdapter.toEntity(dto.getAve()));
        entity.setUsuario(UsuarioAdapter.toEntity(dto.getUsuarioId()));
        return entity;
    }

    public static AnotacaoDTO toDto(Anotacao entity) {
        AnotacaoDTO dto = new AnotacaoDTO();
        dto.setId(entity.getId());
        dto.setDataHorarioDoAvistamento(entity.getDataHorarioDoAvistamento());
        dto.setLocalizacao(entity.getLocalizacao());
        dto.setComentario(entity.getComentario());
        dto.setTamanho(entity.getTamanho());
        dto.setCorPredominante(entity.getCorPredominante());
        dto.setCriadoEm(entity.getCriadoEm());
        dto.setAtualizadoEm(entity.getAtualizadoEm());
        dto.setAve(AveAdapter.toDTO(entity.getAve()));
        dto.setUsuarioId(entity.getUsuario().getId());
        return dto;
    }
}
