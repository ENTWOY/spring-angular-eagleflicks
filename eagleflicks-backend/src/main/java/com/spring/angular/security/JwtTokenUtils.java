package com.spring.angular.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.*;

public class JwtTokenUtils {
    private final static String ACCESS_TOKEN_SECRET = "4sEd654_fe#$dseasq!4862_axaw54_dwa$2s_eqz";
    private final static Long ACCESS_TOKEN_VALIDITY_SECONDS = 1_500_000L;
    public static String createJwtToken(String username, Collection<? extends GrantedAuthority> roles){
        Date expirationDate = new Date(System.currentTimeMillis() + ACCESS_TOKEN_VALIDITY_SECONDS);
        Map<String, Object> extra = new HashMap<>();
        //For now a user can only have ONE role assigned
        for (GrantedAuthority role : roles) {
            extra.put("role", role.getAuthority());
        }


        return Jwts.builder()
                .setSubject(username)
                .setExpiration(expirationDate)
                .addClaims(extra)
                .signWith(Keys.hmacShaKeyFor(ACCESS_TOKEN_SECRET.getBytes()))
                .compact();
    }

    public static UsernamePasswordAuthenticationToken getAuthentication(String token) {
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(ACCESS_TOKEN_SECRET.getBytes())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
            String username = claims.getSubject();
            String role = (String) claims.get("role");
            List<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority(role));

            return new UsernamePasswordAuthenticationToken(username, null, authorities);
        } catch (Exception e){
            return null;
        }
    }


}
