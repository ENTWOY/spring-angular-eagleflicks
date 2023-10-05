package com.spring.angular.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.angular.models.Pais;
import com.spring.angular.repositories.PaisRepository;

@Service
public class PaisService implements PaisServiceImp {

	@Autowired
	private PaisRepository repoPais;
	
	@Override
	public List<Pais> listarPaises() {
		return repoPais.findAll();
	}
}
