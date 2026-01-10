package com.nemanja.backend.repository;

import com.nemanja.backend.model.Exercise;
import org.springframework.data.repository.CrudRepository;

public interface ExerciseRepository extends CrudRepository<Exercise,Long> {
}
