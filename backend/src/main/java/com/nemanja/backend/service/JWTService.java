package com.nemanja.backend.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JWTService {

//    private String secretKey = "";

    public String generateToken(String userEmail) {

        Map<String, Object> claims = new HashMap<>();
        long currentTimeMillis = System.currentTimeMillis();

        return Jwts.builder()
                .claims()
                .add(claims)
                .subject(userEmail)
                .issuedAt(new Date(currentTimeMillis))
                .expiration(new Date(currentTimeMillis + 30 * 60 * 1000)) //30 min
                .and()
                .signWith(getKey())
                .compact();

    }

    private Key getKey() {

        try {
            KeyGenerator keyGenerator = KeyGenerator.getInstance("HmacSHA256");
            SecretKey sk = keyGenerator.generateKey();
            String secretKey = Base64.getEncoder().encodeToString(sk.getEncoded());
            byte[] keyBytes = Decoders.BASE64.decode(secretKey);
            return Keys.hmacShaKeyFor(keyBytes);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }

    }
}
