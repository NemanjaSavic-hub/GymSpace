package com.nemanja.backend.repository;

import com.nemanja.backend.model.Gym;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

public interface GymRepository extends CrudRepository<Gym,Long> {
    Page<Gym> findAll(Pageable pageable);
}
