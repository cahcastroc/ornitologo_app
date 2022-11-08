package com.ornitologo.backend.repositories;

import com.ornitologo.backend.entities.Anotacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnotacaoRepository extends JpaRepository<Anotacao, Long> {
}
