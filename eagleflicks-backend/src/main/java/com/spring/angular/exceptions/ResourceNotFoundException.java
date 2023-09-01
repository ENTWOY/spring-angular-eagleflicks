package com.spring.angular.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/* Esta clase define una excepción personalizada para 
 * manejar situaciones donde un recurso no se encuentra. */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    
    public ResourceNotFoundException(String mensaje) {
        super(mensaje);
    }
}
