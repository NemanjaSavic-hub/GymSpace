package com.nemanja.backend.repository;

import com.nemanja.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    User findUserByUsername(String username);

    User findUserByEmail(String email);
}
