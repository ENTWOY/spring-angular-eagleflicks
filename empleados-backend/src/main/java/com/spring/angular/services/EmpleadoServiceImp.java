package com.spring.angular.services;

import java.util.List;

import com.spring.angular.models.Empleado;

public interface EmpleadoServiceImp {

	List<Empleado> listarEmpleados();
	Empleado guardarEmpleado(Empleado empleado);
	Empleado obtenerEmpleadoPorId(Integer id);
	Empleado actualizarEmpleado(Integer id, Empleado detallesEmpleado);
	public void eliminarEmpleadoPorId(Integer id) ;
}
