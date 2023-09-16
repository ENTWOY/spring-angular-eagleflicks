package com.spring.angular.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.angular.exceptions.ResourceNotFoundException;
import com.spring.angular.models.Usuario;
import com.spring.angular.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repoUsuario;
	
	public List<Usuario> listarUsuarios() {
		return repoUsuario.findAll();
	}
	
	public Usuario guardarUsuario(Usuario usuario) {
		return repoUsuario.save(usuario);
	}
	
	public Usuario obtenerUsuarioPorId(Integer id) {
		return repoUsuario.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el usuario con el ID : " + id));
	}
	
	public Usuario actualizarUsuario(Integer id, Usuario detallesUsuario) {
		Usuario usuario = repoUsuario.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el usuario con el ID: " + id));
		usuario.setNombre(detallesUsuario.getNombre());
		usuario.setEmail(detallesUsuario.getEmail());
		usuario.setContrasena(detallesUsuario.getContrasena());
		usuario.setAvatar(detallesUsuario.getAvatar());		
		Usuario usuarioActualizado = repoUsuario.save(usuario);
		return usuarioActualizado;
	}
	
	public void eliminarUsuarioPorId(Integer id) {
		Usuario usuario = repoUsuario.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el usuario con el ID : " + id));
		repoUsuario.delete(usuario);
	}
}
