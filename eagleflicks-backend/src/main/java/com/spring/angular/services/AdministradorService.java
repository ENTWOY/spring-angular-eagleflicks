package com.spring.angular.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.spring.angular.exceptions.ResourceNotFoundException;
import com.spring.angular.models.Administrador;
import com.spring.angular.repositories.AdministradorRepository;

@Service
public class AdministradorService {

	@Autowired
	private AdministradorRepository repoAdmin;
	private BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
	public List<Administrador> listarAdministradores() {
		List<Administrador> admins = repoAdmin.findAll();
		admins.forEach(admin -> { admin.setContrasena(""); });
		return admins;
	}
	
	public Administrador guardarAdministrador(Administrador admin) {
		admin.setContrasena(bcrypt.encode(admin.getContrasena()));
		return repoAdmin.save(admin);
	}
	
	public Administrador obtenerAdministradorPorId(Integer id) {
		Administrador admin = repoAdmin.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el admin con el ID : " + id));
		admin.setContrasena("");
		return admin;
	}
	
	public Administrador actualizarAdministrador(Integer id, Administrador detallesAdmin) {
		Administrador admin = repoAdmin.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el admin con el ID: " + id));
		admin.setNombre(detallesAdmin.getNombre());
		admin.setApellido(detallesAdmin.getApellido());
		admin.setCorreoElectronico(detallesAdmin.getCorreoElectronico());
		admin.setContrasena(bcrypt.encode(detallesAdmin.getContrasena()));
		admin.setDireccion(detallesAdmin.getDireccion());		
		admin.setAdministradorPais(detallesAdmin.getAdministradorPais());		
		Administrador adminActualizado = repoAdmin.save(admin);
		return adminActualizado;
	}
	
	public void eliminarAdministradorPorId(Integer id) {
		Administrador admin = repoAdmin.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el admin con el ID : " + id));
		repoAdmin.delete(admin);
	}
}
