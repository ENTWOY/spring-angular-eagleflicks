package com.spring.angular.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.angular.models.Empleado;
import com.spring.angular.services.EmpleadoService;

@Controller
@RequestMapping("/api/employee/")
@ResponseBody
@CrossOrigin(origins = "http://localhost:4200") 
public class EmpleadoController {

	@Autowired
	private EmpleadoService serviEmpleado;
	
	@GetMapping("/empleados")
	public List<Empleado> listarEmpleados() { 
	    return serviEmpleado.listarEmpleados();
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
	public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Integer id,@RequestBody Empleado detallesEmpleado){
		Empleado empleadoActualizado = serviEmpleado.actualizarEmpleado(id, detallesEmpleado);
	    return ResponseEntity.ok(empleadoActualizado);
    }
	
	@DeleteMapping("/empleados/{id}")
	public ResponseEntity<Map<String,Boolean>> eliminarEmpleado(@PathVariable Integer id){
		serviEmpleado.eliminarEmpleadoPorId(id);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
    }
}
