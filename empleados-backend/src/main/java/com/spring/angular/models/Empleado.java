package com.spring.angular.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_empleado")
public class Empleado {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_emp")
	private Integer idEmp;

	@Column(name = "nom_emp")
	private String nomEmp;

	@Column(name = "ape_emp")
	private String apeEmp;

	@Column(name = "ema_emp")
	private String emaEmp;

	public Empleado() {
		super();
	}

	public Empleado(Integer idEmp, String nomEmp, String apeEmp, String emaEmp) {
		super();
		this.idEmp = idEmp;
		this.nomEmp = nomEmp;
		this.apeEmp = apeEmp;
		this.emaEmp = emaEmp;
	}

	public Integer getIdEmp() {
		return idEmp;
	}

	public void setIdEmp(Integer idEmp) {
		this.idEmp = idEmp;
	}

	public String getNomEmp() {
		return nomEmp;
	}

	public void setNomEmp(String nomEmp) {
		this.nomEmp = nomEmp;
	}

	public String getApeEmp() {
		return apeEmp;
	}

	public void setApeEmp(String apeEmp) {
		this.apeEmp = apeEmp;
	}

	public String getEmaEmp() {
		return emaEmp;
	}

	public void setEmaEmp(String emaEmp) {
		this.emaEmp = emaEmp;
	}
}
