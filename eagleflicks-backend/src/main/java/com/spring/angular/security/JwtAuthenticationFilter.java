package com.spring.angular.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        AuthCredentials authCredentials = new AuthCredentials();
        try {
            authCredentials = new ObjectMapper().readValue(request.getReader(), AuthCredentials.class);
        } catch (IOException e) {
            // Handle the exception
        }

        String userType = determineUserType(authCredentials.getUsername());
        UsernamePasswordAuthenticationToken usernamePAT;

        if ("administrador".equalsIgnoreCase(userType)) {
            usernamePAT = new UsernamePasswordAuthenticationToken(
                    authCredentials.getUsername(),
                    authCredentials.getPassword(),
                    Collections.singletonList(new SimpleGrantedAuthority("ADMIN"))
            );
        } else if ("usuario".equalsIgnoreCase(userType)) {
            usernamePAT = new UsernamePasswordAuthenticationToken(
                    authCredentials.getUsername(),
                    authCredentials.getPassword(),
                    Collections.singletonList(new SimpleGrantedAuthority("USER"))
            );
        } else {
            // Handle unknown user type or invalid login
            throw new AuthenticationException("Invalid user type") {
            };
        }

        return getAuthenticationManager().authenticate(usernamePAT);
    }
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {

        UserDetails userDetails = (UserDetails) authResult.getPrincipal();
        String token = JwtTokenUtils.createJwtToken(userDetails.getUsername(), userDetails.getAuthorities());

        response.setContentType("application/json");
        Map<String, Object> responseBody = new HashMap<>();
        responseBody.put("token", token);

        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.writeValue(response.getWriter(), responseBody);

        super.successfulAuthentication(request, response, chain, authResult);
    }

    private String determineUserType(String username) {
        if (username.endsWith("@admin.com")) {
            return "administrador";
        } else {
            return "usuario";
        }
    }

}
