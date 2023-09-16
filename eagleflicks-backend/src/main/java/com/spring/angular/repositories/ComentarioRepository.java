package com.spring.angular.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.angular.models.Comentario;

@Repository
public interface ComentarioRepository extends JpaRepository<Comentario, Integer> {

}
