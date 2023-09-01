package com.spring.angular.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.angular.models.Pais;

@Repository
public interface PaisRepository extends JpaRepository<Pais, Integer> {

}
