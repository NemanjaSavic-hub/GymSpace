package com.nemanja.backend.service;

import com.nemanja.backend.exception.UserNotFoundException;
import com.nemanja.backend.model.User;
import com.nemanja.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

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

//    public String getHash(String originalString){
//        // Create an encoder with strength 16
//        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(16);
//        String result = encoder.encode("myPassword");
//        MessageDigest digest = MessageDigest.getInstance("SHA-256");
//        byte[] encodedhash = digest.digest(
//                originalString.getBytes(StandardCharsets.UTF_8));
//    }

    private static String bytesToHex(byte[] hash) {
        StringBuilder hexString = new StringBuilder(2 * hash.length);
        for(int i = 0; i < hash.length; i++) {
            String hex = Integer.toHexString(0xff & hash[i]);
            if(hex.length() == 1) {
                hexString.append('0');
            }
            hexString.append(hex);
        }
        return hexString.toString();
    }
}
