package com.nemanja.backend.dto;

import com.nemanja.backend.model.User;

public class UserWithJWTTokenResponse {
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    private String token;
}
