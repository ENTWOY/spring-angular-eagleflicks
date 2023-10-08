package com.spring.angular.security;

import com.spring.angular.models.Administrador;
import com.spring.angular.models.Usuario;
import com.spring.angular.repositories.AdministradorRepository;
import com.spring.angular.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImpl implements UserDetailsService {
    private final AdministradorRepository administradorRepository;
    private final UsuarioRepository usuarioRepository;

    @Autowired
    public UserDetailServiceImpl(AdministradorRepository administradorRepository,
                                 UsuarioRepository usuarioRepository) {
        this.administradorRepository = administradorRepository;
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Administrador administrador = administradorRepository.findByCorreoElectronico(username)
                .orElse(null);

        if (administrador != null) {
            return new AdministradorDetailsImpl(administrador);
        }

        Usuario usuario = usuarioRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return new UsuarioDetailsImpl(usuario);
    }
}
