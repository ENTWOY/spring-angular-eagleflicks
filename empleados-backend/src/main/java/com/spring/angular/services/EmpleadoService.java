package com.spring.angular.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.angular.exceptions.ResourceNotFoundException;
import com.spring.angular.models.Empleado;
import com.spring.angular.repositories.EmpleadoRepository;

@Service
public class EmpleadoService implements EmpleadoServiceImp {

	@Autowired
	private EmpleadoRepository repoEmpleado;

	@Override
	public List<Empleado> listarEmpleados() {
		return repoEmpleado.findAll();
	}

	@Override
	public Empleado guardarEmpleado(Empleado empleado) {
		return repoEmpleado.save(empleado);
	}

	@Override
	public Empleado obtenerEmpleadoPorId(Integer id) {
		return repoEmpleado.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID : " + id));
	}

	@Override
	public Empleado actualizarEmpleado(Integer id, Empleado detallesEmpleado) {
		Empleado empleado = repoEmpleado.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID: " + id));
		empleado.setNomEmp(detallesEmpleado.getNomEmp());
		empleado.setApeEmp(detallesEmpleado.getApeEmp());
		empleado.setEmaEmp(detallesEmpleado.getEmaEmp());
		Empleado empleadoActualizado = repoEmpleado.save(empleado);
		return empleadoActualizado;
	}

	@Override
	public void eliminarEmpleadoPorId(Integer id) {
		Empleado empleado = repoEmpleado.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID : " + id));
		repoEmpleado.delete(empleado);
	}

	@Override
	public List<Empleado> buscarEmpleadoPorNombre(String nombre) {
		return repoEmpleado.findByNomEmpContainingIgnoreCase(nombre);
	}

	@Override
	public List<Empleado> buscarEmpleadoPorCodigo(int codigo) {
		return repoEmpleado.findByIdEmp(codigo);
	}
}
