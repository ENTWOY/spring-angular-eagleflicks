package com.spring.angular;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.spring.angular.models.Empleado;
import com.spring.angular.repositories.EmpleadoRepository;
import com.spring.angular.services.EmpleadoService;

@SpringBootTest
class SpringAngularApplicationTests {

	@Autowired
    private EmpleadoService serviEmpleado;
	
	@Autowired
	private EmpleadoRepository repoEmpleado;
	
	@Test
	void contextLoads() {
		long count = repoEmpleado.count();
        List<Empleado> empleados = serviEmpleado.listarEmpleados();
        
        for(Empleado s:empleados)
			System.out.println(s.getIdEmp() + "---" + s.getNomEmp() + "---" + s.getApeEmp() + "---" + s.getEmaEmp());
        System.out.println("Total: " + count);
	}

}
