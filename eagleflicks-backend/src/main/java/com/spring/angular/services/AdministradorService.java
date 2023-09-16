package com.spring.angular.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.angular.models.Administrador;
import com.spring.angular.repositories.AdministradorRepository;

@Service
public class AdministradorService {

	@Autowired
	private AdministradorRepository repoAdmin;
	
	public List<Administrador> listarAdministradores() {
		return repoAdmin.findAll();
	}
}
