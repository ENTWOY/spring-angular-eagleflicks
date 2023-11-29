package com.spring.angular.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.angular.models.Pais;
import com.spring.angular.services.PaisService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class PaisController {
	
	@Autowired
	private PaisService serviPais;
	
	@GetMapping("/paises")
	public List<Pais> listarPaises() {
		return serviPais.listarPaises();
	}
}
