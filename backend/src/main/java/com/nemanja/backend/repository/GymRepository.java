package com.nemanja.backend.repository;

import com.nemanja.backend.model.Gym;
import org.springframework.data.repository.CrudRepository;

public interface GymRepository extends CrudRepository<Gym,Long> {
}
