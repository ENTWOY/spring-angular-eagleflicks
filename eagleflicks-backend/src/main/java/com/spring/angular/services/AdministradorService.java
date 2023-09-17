package com.spring.angular.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.angular.exceptions.ResourceNotFoundException;
import com.spring.angular.models.Administrador;
import com.spring.angular.repositories.AdministradorRepository;

@Service
public class AdministradorService {

	@Autowired
	private AdministradorRepository repoAdmin;
	
	public List<Administrador> listarAdministradores() {
		return repoAdmin.findAll();
	}
	
	public Administrador guardarAdministrador(Administrador admin) {
		return repoAdmin.save(admin);
	}
	
	public Administrador obtenerAdministradorPorId(Integer id) {
		return repoAdmin.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el admin con el ID : " + id));
	}
	
	public Administrador actualizarAdministrador(Integer id, Administrador detallesAdmin) {
		Administrador admin = repoAdmin.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el admin con el ID: " + id));
		admin.setNombre(detallesAdmin.getNombre());
		admin.setApellido(detallesAdmin.getApellido());
		admin.setCorreoElectronico(detallesAdmin.getCorreoElectronico());
		admin.setContrasena(detallesAdmin.getContrasena());		
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
