package com.nemanja.backend.service;

import com.nemanja.backend.exception.UserNotFoundException;
import com.nemanja.backend.model.User;
import com.nemanja.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);

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



//    public String getHash(String originalString){
//        // Create an encoder with strength 16
//        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(16);
//        String result = encoder.encode("myPassword");
//        MessageDigest digest = MessageDigest.getInstance("SHA-256");
//        byte[] encodedhash = digest.digest(
//                originalString.getBytes(StandardCharsets.UTF_8));
//    }

//    private static String bytesToHex(byte[] hash) {
//        StringBuilder hexString = new StringBuilder(2 * hash.length);
//        for(int i = 0; i < hash.length; i++) {
//            String hex = Integer.toHexString(0xff & hash[i]);
//            if(hex.length() == 1) {
//                hexString.append('0');
//            }
//            hexString.append(hex);
//        }
//        return hexString.toString();
//    }


}
