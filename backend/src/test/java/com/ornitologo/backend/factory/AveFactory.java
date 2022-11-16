package com.ornitologo.backend.factory;

import com.ornitologo.backend.entities.Ave;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

public class AveFactory {

    private static Ave calopsita = new Ave(1L, "Calopsita", "Nympcus", "Familia Hollandicus",
            Instant.parse("2022-11-07T10:00:00Z"));
    private static Ave canario = new Ave(1L, "Canario", "Nympcus", "Familia Nymps",
            Instant.parse("2022-11-07T10:00:00Z"));
    private static Ave papagaio = new Ave(1L, "Papagaio", "Papis", "Familia Dics",
            Instant.parse("2022-11-07T10:00:00Z"));

    public static Ave novaAve() {
        return new Ave(4L, "Maritaca", "Maritacus", "Familia Maritacas", Instant.parse("2022-11-07T10:00:00Z"));
    }

    public static List<Ave> listaAves() {
        List<Ave> listaAve = new ArrayList<>();
        listaAve.add(calopsita);
        listaAve.add(canario);
        listaAve.add(papagaio);

        return listaAve;
    }

    public static List<Ave> listaAvesNomeIniciaComCa() {
        List<Ave> listaAve = new ArrayList<>();
        listaAve.add(calopsita);
        listaAve.add(canario);

        return listaAve;
    }

}
