package com.nemanja.backend.controller;

import com.nemanja.backend.dto.LoginRequestDTO;
import com.nemanja.backend.exception.UserNotFoundException;
import com.nemanja.backend.model.User;
import com.nemanja.backend.repository.UserRepository;
import com.nemanja.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:5173")
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    ResponseEntity<User> createUser(@RequestBody User newUser){

        var user = this.userService.createUser(newUser);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/")
    String hello(){
        return "Hello";
    }

    @GetMapping("/login/{email}")
    User loginUserEmail(@PathVariable String email){
        return this.userService.getUserByEmail(email);
    }

    @PostMapping("/login")
    ResponseEntity<User> loginUser(@RequestBody LoginRequestDTO requestDTO){
        var user = this.userService.getUserByEmailAndPassword(requestDTO.getEmail(), requestDTO.getPassword());
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/login2")
    String loginUser2(@RequestBody LoginRequestDTO requestDTO){
//        var user = this.userService.getUserByEmailAndPassword(requestDTO.getEmail(), requestDTO.getPassword());
        return this.userService.verify(requestDTO.getEmail(), requestDTO.getPassword());
    }

    @GetMapping("/users")
    Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
//        return userRepository.findById(id)
//                .orElseThrow(() -> new UserNotFoundException(id));
        return this.userService.getUserById(id);
    }

    @PutMapping("user/{id}")
    User updateUser(@PathVariable Long id, @RequestBody User updatedUser){
        return userRepository.findById(id)
                .map(user -> {
                    user.setFirstname(updatedUser.getFirstname());
                    user.setLastname(updatedUser.getLastname());
                    user.setUsername(updatedUser.getUsername());
                    return userRepository.save(user);
                }).orElseThrow( () -> new UserNotFoundException(id));
    }

    @DeleteMapping("user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id " + id + " has been deleted successfully";
    }
}
