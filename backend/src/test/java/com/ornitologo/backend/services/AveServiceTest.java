package com.ornitologo.backend.services;


import com.ornitologo.backend.dtos.AveDTO;
import com.ornitologo.backend.entities.Ave;
import com.ornitologo.backend.factory.AveFactory;
import com.ornitologo.backend.repositories.AveRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;
import java.util.stream.Collectors;

@ExtendWith(SpringExtension.class)
public class AveServiceTest {


    @InjectMocks
    private AveService aveService;

    @Mock
    private AveRepository aveRepository;

    private List<AveDTO> listaAvesDTO;
    private List<AveDTO> listaAvesDTONomeIniciaComCa;
    private AveDTO aveDTO;
    Ave novaAve = AveFactory.novaAve();


    @BeforeEach
    public void setUp() throws Exception {


        List<Ave> listaAves = AveFactory.listaAves();
        List<Ave> listaAvesNomeIniciaComCa = AveFactory.listaAvesNomeIniciaComCa();

        listaAvesDTO = listaAves.stream().map(aux -> new AveDTO(aux)).collect(Collectors.toList());
        listaAvesDTONomeIniciaComCa = listaAvesNomeIniciaComCa.stream().map(aux -> new AveDTO(aux)).collect(Collectors.toList());
        aveDTO = new AveDTO(novaAve);


        Mockito.when(aveRepository.buscaPorNome("")).thenReturn(listaAves);
        Mockito.when(aveRepository.buscaPorNome("ca")).thenReturn(listaAvesNomeIniciaComCa);
        Mockito.when(aveRepository.save(Mockito.any(Ave.class))).thenReturn(novaAve);
    }

    @Test
    public void listarTodosDeveRetornarUmaListaComTodasAves() {

        List<AveDTO> listaAves = aveService.listarTodos("");
        Assertions.assertEquals(listaAvesDTO, listaAves);
    }

    @Test
    public void listaTodosdeveRetornarUmaListaComAvesNomeIniciaComCa() {
        List<AveDTO> listaAvesNomeIniciaComCa = aveService.listarTodos("ca");
        Assertions.assertEquals(listaAvesDTONomeIniciaComCa.size(), listaAvesNomeIniciaComCa.size());
    }

    @Test
    public void insereAveDeveRetornarAveCriada() {
        AveDTO novaAveDTO = aveService.insereAve(new AveDTO(novaAve));
        Assertions.assertEquals(aveDTO, novaAveDTO);
    }
}
