package com.spring.angular.controllers;

import com.spring.angular.models.Director;
import com.spring.angular.models.Pais;
import com.spring.angular.services.DirectorService;
import com.spring.angular.services.PaisService;
import org.junit.jupiter.api.Test;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class DirectorControllerTest {
    private DirectorService mockDirectorService = mock(DirectorService.class);
    private PaisService mockPaisService = mock(PaisService.class);

    private DirectorController directorController = new DirectorController(mockDirectorService, mockPaisService);
    @Test
    void testListarDirectores() {
        List<Director> mockDirectores = Arrays.asList(new Director(), new Director());
        when(mockDirectorService.listarDirectores()).thenReturn(mockDirectores);
        List<Director> result = directorController.listarDirectores();
        assertEquals(mockDirectores, result);
    }

    @Test
    void testListarPaises() {
        List<Pais> mockPaises = Arrays.asList(new Pais(), new Pais());
        when(mockPaisService.listarPaises()).thenReturn(mockPaises);
        List<Pais> result = directorController.listarPaises();
        assertEquals(mockPaises, result);
    }

    @Test
    void testGuardarDirector() {
        Director mockDirector = new Director();
        when(mockDirectorService.guardarDirector(any())).thenReturn(mockDirector);
        Director result = directorController.guardarEmpleado(new Director());
        assertEquals(mockDirector, result);
    }

    @Test
    void testObtenerDirectorPorId() {
        Director mockDirector = new Director();
        when(mockDirectorService.obtenerDirectorPorId(anyInt())).thenReturn(mockDirector);
        ResponseEntity<Director> result = directorController.obtenerDirectorPorId(1);
        assertEquals(mockDirector, result.getBody());
    }

    @Test
    void testActualizarDirector() {
        Director mockDirector = new Director();
        when(mockDirectorService.actualizarDirector(anyInt(), any())).thenReturn(mockDirector);
        ResponseEntity<Director> result = directorController.actualizarDirector(1, new Director());
        assertEquals(mockDirector, result.getBody());
    }

    @Test
    void testEliminarDirector() {
        ResponseEntity<Map<String, Boolean>> result = directorController.eliminarDirector(1);
        assertTrue(result.getBody().get("eliminar"));
    }
}