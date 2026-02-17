package com.nemanja.backend.service;

import com.nemanja.backend.exception.UserNotFoundException;
import com.nemanja.backend.model.User;
import com.nemanja.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    private final AuthenticationManager authenticationManager;

    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);

    public UserService(UserRepository userRepository, @Lazy AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
    }

    public User getUserById(Long id){
        var user = this.userRepository.findById(id);
        if(user.isPresent()){
           return user.get();
        }
        throw new UserNotFoundException(id);
    }

    public User createUser(User newUser){
        newUser.setPassword(this.bCryptPasswordEncoder.encode(newUser.getPassword()));
        return this.userRepository.save(newUser);
    }

    public User getUserByEmail(String email) throws UsernameNotFoundException{
        var user = this.userRepository.findUserByEmail(email);
        if(user == null){
            throw new UsernameNotFoundException("User not found");
        }
        return user;
    }

    public User getUserByEmailAndPassword(String email, String password) throws UsernameNotFoundException{
        var user = this.userRepository.findUserByEmail(email);
        if(user == null){
            return null;
//            throw new UsernameNotFoundException("User not found");
        }

        if(!bCryptPasswordEncoder.matches(password, user.getPassword())){
//            throw new UsernameNotFoundException("Password not matching");
            return null;
        }

        return user;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

//        User user = this.userRepository.findUserByUsername(username);
        User user = this.userRepository.findUserByEmail(email);

        if(user == null){
            System.out.println("User not found");
            throw new UsernameNotFoundException("User not found");
        }

        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .build();

    }

    public String verify(String email, String rawPassword) {
        try{
            Authentication authentication =
                    authenticationManager.authenticate(
                            new UsernamePasswordAuthenticationToken(email, rawPassword));
            if(authentication.isAuthenticated())
                return "Success";
        }
        catch (Exception e){
            return "Fail";
        }
        return "Fail";
    }


}
