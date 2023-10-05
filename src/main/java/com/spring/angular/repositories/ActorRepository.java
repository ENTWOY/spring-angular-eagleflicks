package com.spring.angular.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.angular.models.Actor;

@Repository
public interface ActorRepository extends JpaRepository<Actor, Integer>{

}
