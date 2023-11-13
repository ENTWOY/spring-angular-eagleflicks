package com.spring.angular.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.angular.models.Empleado;
import com.spring.angular.models.Pais;
import com.spring.angular.services.EmpleadoService;
import com.spring.angular.services.PaisService;

@RestController
@RequestMapping("/api/employee/")
@CrossOrigin(origins = "http://localhost:4200")
public class EmpleadoController {

	@Autowired
	private EmpleadoService serviEmpleado;

	@Autowired
	private PaisService serviPais;

	@Autowired
	public EmpleadoController(EmpleadoService serviEmpleado, PaisService serviPais) {
		this.serviEmpleado = serviEmpleado;
		this.serviPais = serviPais;
	}

	@GetMapping("/empleados")
	public List<Empleado> listarEmpleados() {
		return serviEmpleado.listarEmpleados();
	}

	@GetMapping("/paises")
	public List<Pais> listarPaises() {
		return serviPais.listarPaises();
	}

	@PostMapping("/empleados")
	public Empleado guardarEmpleado(@RequestBody Empleado empleado) {
		return serviEmpleado.guardarEmpleado(empleado);
	}

	@GetMapping("/empleados/{id}")
	public ResponseEntity<Empleado> obtenerEmpleadoPorId(@PathVariable Integer id) {
		Empleado empleado = serviEmpleado.obtenerEmpleadoPorId(id);
		return ResponseEntity.ok(empleado);
	}

	@PutMapping("/empleados/{id}")
	public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Integer id,
			@RequestBody Empleado detallesEmpleado) {
		Empleado empleadoActualizado = serviEmpleado.actualizarEmpleado(id, detallesEmpleado);
		return ResponseEntity.ok(empleadoActualizado);
	}

	@DeleteMapping("/empleados/{id}")
	public ResponseEntity<Map<String, Boolean>> eliminarEmpleado(@PathVariable Integer id) {
		serviEmpleado.eliminarEmpleadoPorId(id);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar", Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
	}

	@GetMapping("/empleados/buscar-nombre")
	public ResponseEntity<List<Empleado>> searchEmployeesByName(@RequestParam String nombre) {
		List<Empleado> objEmp = serviEmpleado.buscarEmpleadoPorNombre(nombre);
		return ResponseEntity.ok(objEmp);
	}

	@GetMapping("/empleados/buscar-codigo")
	public ResponseEntity<List<Empleado>> searchEmpleadosByCodigo(@RequestParam int codigo) {
		List<Empleado> objEmp = serviEmpleado.buscarEmpleadoPorCodigo(codigo);
		return ResponseEntity.ok(objEmp);
	}
}
