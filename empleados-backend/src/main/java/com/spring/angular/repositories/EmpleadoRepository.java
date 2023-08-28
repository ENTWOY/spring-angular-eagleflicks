package com.spring.angular.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.angular.models.Empleado;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado, Integer> {

	List<Empleado> findByNomEmpContainingIgnoreCase(String nombre);
    List<Empleado> findByIdEmp(int codigo);

}
