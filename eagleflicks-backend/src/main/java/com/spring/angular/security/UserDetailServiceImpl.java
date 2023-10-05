package com.spring.angular.security;

import com.spring.angular.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImpl implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return new UserDetailsImpl(
                userRepository
                .findByUsername(username)
                .orElseThrow(()->new UsernameNotFoundException(String.format("El usuario '%s' no existe.", username))));
    }

    @Autowired
    private UserRepository userRepository;
}
