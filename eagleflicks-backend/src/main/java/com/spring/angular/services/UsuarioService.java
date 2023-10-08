package com.spring.angular.services;

import java.util.List;

import com.spring.angular.models.Administrador;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.spring.angular.exceptions.ResourceNotFoundException;
import com.spring.angular.models.Usuario;
import com.spring.angular.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repoUsuario;
	private BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
	
	public List<Usuario> listarUsuarios() {
		List<Usuario> users =  repoUsuario.findAll();
		users.forEach(user -> { user.setContrasena(""); });
		return users;
	}
	
	public Usuario guardarUsuario(Usuario usuario) {
		usuario.setContrasena(bcrypt.encode(usuario.getContrasena()));
		return repoUsuario.save(usuario);
	}
	
	public Usuario obtenerUsuarioPorId(Integer id) {
		Usuario user = repoUsuario.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el usuario con el ID : " + id));
		user.setContrasena("");
		return user;
	}
	
	public Usuario actualizarUsuario(Integer id, Usuario detallesUsuario) {
		Usuario usuario = repoUsuario.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el usuario con el ID: " + id));
		usuario.setNombre(detallesUsuario.getNombre());
		usuario.setEmail(detallesUsuario.getEmail());
		usuario.setContrasena(bcrypt.encode(detallesUsuario.getContrasena()));
		usuario.setAvatar(detallesUsuario.getAvatar());		
		Usuario usuarioActualizado = repoUsuario.save(usuario);
		return usuarioActualizado;
	}
	
	public void eliminarUsuarioPorId(Integer id) {
		Usuario usuario = repoUsuario.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el usuario con el ID : " + id));
		repoUsuario.delete(usuario);
	}
}
