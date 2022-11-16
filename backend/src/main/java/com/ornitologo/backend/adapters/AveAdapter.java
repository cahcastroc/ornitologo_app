package com.ornitologo.backend.adapters;

import com.ornitologo.backend.dtos.AveDTO;
import com.ornitologo.backend.entities.Ave;

public class AveAdapter {

    // toEntity
    public static Ave toEntity(AveDTO aveDTO) {
        Ave ave = new Ave();
        ave.setId(aveDTO.getId());
        ave.setNomeCientifico(aveDTO.getNomeCientifico());
        ave.setNomePopular(aveDTO.getNomePopular());
        ave.setDescricao(aveDTO.getDescricao());
        return ave;
    }

    // toDTO
    public static AveDTO toDTO(Ave ave) {
        AveDTO aveDTO = new AveDTO();
        aveDTO.setNomeCientifico(ave.getNomeCientifico());
        aveDTO.setNomePopular(ave.getNomePopular());
        aveDTO.setDescricao(ave.getDescricao());
        aveDTO.setId(ave.getId());
        return aveDTO;
    }

}
