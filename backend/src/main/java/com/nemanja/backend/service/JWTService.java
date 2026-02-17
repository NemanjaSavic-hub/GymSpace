package com.nemanja.backend.service;

import org.springframework.stereotype.Service;

@Service
public class JWTService {
    public String generateToken() {
        return "Random Token";
    }
}
