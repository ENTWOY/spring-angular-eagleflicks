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

import com.spring.angular.models.Usuario;
import com.spring.angular.services.UsuarioService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {
	
	@Autowired
	private UsuarioService serviUsuario;

	@GetMapping("/usuarios")
	public List<Usuario> listarUsuarios() {
		return serviUsuario.listarUsuarios();
	}
	
	@PostMapping("/usuarios")
	public Usuario guardarUsuario(@RequestBody Usuario usuario) {
		return serviUsuario.guardarUsuario(usuario);
	}
	
	@GetMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> obtenerUsuarioPorId(@PathVariable Integer id) {
		Usuario usuario = serviUsuario.obtenerUsuarioPorId(id);
		return ResponseEntity.ok(usuario);
	}
	
	@PutMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Integer id,
			@RequestBody Usuario detallesUsuario) {
		Usuario usuarioActualizado = serviUsuario.actualizarUsuario(id, detallesUsuario);
		return ResponseEntity.ok(usuarioActualizado);
	}
	
	@DeleteMapping("/usuarios/{id}")
	public ResponseEntity<Map<String, Boolean>> eliminarUsuario(@PathVariable Integer id) {
		serviUsuario.eliminarUsuarioPorId(id);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar", Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
	}
}
