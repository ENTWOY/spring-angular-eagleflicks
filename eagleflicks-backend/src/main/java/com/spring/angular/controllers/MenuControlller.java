package com.spring.angular.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.angular.repositories.ActorRepository;
import com.spring.angular.repositories.AdministradorRepository;
import com.spring.angular.repositories.DirectorRepository;
import com.spring.angular.repositories.GeneroRepository;
import com.spring.angular.repositories.PaisRepository;
import com.spring.angular.repositories.PeliculaRepository;
import com.spring.angular.repositories.UsuarioRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class MenuControlller {
	
	@Autowired
	private GeneroRepository repoGenero;
	@Autowired
	private ActorRepository repoActor;
	@Autowired
	private PeliculaRepository repoPeli;
	@Autowired
	private PaisRepository repoPais;
	@Autowired
	private DirectorRepository repoDirectores;
	@Autowired
	private UsuarioRepository repoUsuarios;
	@Autowired
	private AdministradorRepository repoAdministradores;

	@GetMapping("/menu")
	public Map<String, Long> getMenuData() {
	    Map<String, Long> menuData = new HashMap<>();
	    Long numberOfGenres = repoGenero.count();
	    Long numberOfActors = repoActor.count();
	    Long numberOfMovies = repoPeli.count();
	    Long numberOfDirectors = repoDirectores.count();
	    Long numberOfCountries = repoPais.count();
	    Long numberOfUsers = repoUsuarios.count();
	    Long numberOfAdmins = repoAdministradores.count();
	    menuData.put("Genres", numberOfGenres);
	    menuData.put("Actors", numberOfActors);
	    menuData.put("Movies", numberOfMovies);
	    menuData.put("Directors", numberOfDirectors);
	    menuData.put("Countries", numberOfCountries);
	    menuData.put("Users", numberOfUsers);
	    menuData.put("Admins", numberOfAdmins);
	    return menuData;
	}
}
