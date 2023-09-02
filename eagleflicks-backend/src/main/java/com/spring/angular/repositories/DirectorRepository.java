package com.spring.angular.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.angular.models.Director;

@Repository
public interface DirectorRepository extends JpaRepository<Director, Integer> {

}
