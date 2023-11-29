package com.spring.angular.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import com.spring.angular.models.Administrador;

@Repository
public interface AdministradorRepository extends JpaRepository<Administrador, Integer>{
    Optional<Administrador> findByCorreoElectronico(String correoElectronico);
}
