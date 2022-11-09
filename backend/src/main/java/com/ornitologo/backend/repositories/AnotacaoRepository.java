package com.ornitologo.backend.repositories;

import com.ornitologo.backend.entities.Anotacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnotacaoRepository extends JpaRepository<Anotacao, Long> {
    @Query(
            value = "select * from anotacao where usuario_id = ?1",
            nativeQuery = true)
    List<Anotacao> findAllByUser(Long id);
}
