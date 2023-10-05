package com.spring.angular.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.angular.models.Genero;

@Repository
public interface GeneroRepository extends JpaRepository<Genero, Integer>{

}
