package com.nemanja.backend.controller;

import com.nemanja.backend.model.User;
import com.nemanja.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User createUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }
}
