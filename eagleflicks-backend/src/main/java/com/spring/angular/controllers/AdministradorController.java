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
import org.springframework.web.bind.annotation.RestController;

import com.spring.angular.models.Administrador;
import com.spring.angular.services.AdministradorService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class AdministradorController {

	@Autowired
	private AdministradorService serviAdmin;
	
	@GetMapping("/administradores")
	public List<Administrador> listarAdministradores() {
		return serviAdmin.listarAdministradores();
	}
	
	@PostMapping("/administradores")
	public Administrador guardarAdministrador(@RequestBody Administrador admin) {
		return serviAdmin.guardarAdministrador(admin);
	}
	
	@GetMapping("/administradores/{id}")
	public ResponseEntity<Administrador> obtenerAdministradorPorId(@PathVariable Integer id) {
		Administrador admin = serviAdmin.obtenerAdministradorPorId(id);
		return ResponseEntity.ok(admin);
	}
	
	@PutMapping("/administradores/{id}")
	public ResponseEntity<Administrador> actualizarAdministrador(@PathVariable Integer id,
			@RequestBody Administrador detallesAdmin) {
		Administrador adminActualizado = serviAdmin.actualizarAdministrador(id, detallesAdmin);
		return ResponseEntity.ok(adminActualizado);
	}
	
	@DeleteMapping("/administradores/{id}")
	public ResponseEntity<Map<String, Boolean>> eliminarAdministrador(@PathVariable Integer id) {
		serviAdmin.eliminarAdministradorPorId(id);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar", Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
	}
}
