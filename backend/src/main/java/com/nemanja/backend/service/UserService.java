package com.nemanja.backend.service;

import com.nemanja.backend.exception.UserNotFoundException;
import com.nemanja.backend.model.User;
import com.nemanja.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserById(Long id){
        var user = this.userRepository.findById(id);
        if(user.isPresent()){
           return user.get();
        }
        throw new UserNotFoundException(id);
    }
}
