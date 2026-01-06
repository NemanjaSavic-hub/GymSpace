package com.nemanja.backend.exception;

public class GymNotFoundException extends RuntimeException {
    public GymNotFoundException(Long id) {
        super("Could not find the gym with id " + id);
    }
}
