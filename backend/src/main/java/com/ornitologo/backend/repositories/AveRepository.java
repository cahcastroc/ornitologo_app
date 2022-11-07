package com.ornitologo.backend.repositories;

import com.ornitologo.backend.dtos.AveDTO;
import com.ornitologo.backend.entities.Ave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AveRepository extends JpaRepository<Ave,Long> {


//     List<Ave> findByNomePopularOrNomeCientificoStartingWithAllIgnoreCase(String nome);

     @Query("select distinct a from Ave a " +
             "where upper(a.nomePopular) " +
             "like upper(:nome||'%') " +
             "or upper(a.nomeCientifico)" +
             "like upper(:nome||'%') ")
     List<Ave> buscaPorNome(@Param("nome") String nome);


}
