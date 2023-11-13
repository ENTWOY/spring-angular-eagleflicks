package com.spring.angular.controllers;

import com.spring.angular.models.Empleado;
import com.spring.angular.models.Pais;
import com.spring.angular.services.EmpleadoService;
import com.spring.angular.services.PaisService;
import org.junit.jupiter.api.Test;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class EmpleadoControllerTest {
    private EmpleadoService mockEmpleadoService = mock(EmpleadoService.class);
    private PaisService mockPaisService = mock(PaisService.class);

    private EmpleadoController empleadoController = new EmpleadoController(mockEmpleadoService, mockPaisService);
    @Test
    void testListarEmpleados() {
        List<Empleado> mockEmpleados = Arrays.asList(new Empleado(), new Empleado());
        when(mockEmpleadoService.listarEmpleados()).thenReturn(mockEmpleados);
        List<Empleado> result = empleadoController.listarEmpleados();
        assertEquals(mockEmpleados, result);
    }

    @Test
    void testListarPaises() {
        List<Pais> mockPaises = Arrays.asList(new Pais(), new Pais());
        when(mockPaisService.listarPaises()).thenReturn(mockPaises);
        List<Pais> result = empleadoController.listarPaises();
        assertEquals(mockPaises, result);
    }

    @Test
    void testGuardarEmpleado() {
        Empleado mockEmpleado = new Empleado();
        when(mockEmpleadoService.guardarEmpleado(any())).thenReturn(mockEmpleado);
        Empleado result = empleadoController.guardarEmpleado(new Empleado());
        assertEquals(mockEmpleado, result);
    }

    @Test
    void testObtenerEmpleadoPorId() {
        Empleado mockEmpleado = new Empleado();
        when(mockEmpleadoService.obtenerEmpleadoPorId(anyInt())).thenReturn(mockEmpleado);
        ResponseEntity<Empleado> result = empleadoController.obtenerEmpleadoPorId(1);
        assertEquals(mockEmpleado, result.getBody());
    }

    @Test
    void testActualizarEmpleado() {
        Empleado mockEmpleado = new Empleado();
        when(mockEmpleadoService.actualizarEmpleado(anyInt(), any())).thenReturn(mockEmpleado);
        ResponseEntity<Empleado> result = empleadoController.actualizarEmpleado(1, new Empleado());
        assertEquals(mockEmpleado, result.getBody());
    }

    @Test
    void testEliminarEmpleado() {
        ResponseEntity<Map<String, Boolean>> result = empleadoController.eliminarEmpleado(1);
        assertTrue(result.getBody().get("eliminar"));
    }

    @Test
    void testSearchEmployeesByName() {
        List<Empleado> mockEmpleados = Arrays.asList(new Empleado(), new Empleado());
        when(mockEmpleadoService.buscarEmpleadoPorNombre(anyString())).thenReturn(mockEmpleados);
        ResponseEntity<List<Empleado>> result = empleadoController.searchEmployeesByName("John");
        assertEquals(mockEmpleados, result.getBody());
    }

    @Test
    void testSearchEmpleadosByCodigo() {
        List<Empleado> mockEmpleados = Arrays.asList(new Empleado(), new Empleado());
        when(mockEmpleadoService.buscarEmpleadoPorCodigo(anyInt())).thenReturn(mockEmpleados);
        ResponseEntity<List<Empleado>> result = empleadoController.searchEmpleadosByCodigo(123);
        assertEquals(mockEmpleados, result.getBody());
    }
}