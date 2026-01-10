package com.nemanja.backend.repository;

import com.nemanja.backend.model.Training;
import org.springframework.data.repository.CrudRepository;

public interface TrainingRepository extends CrudRepository<Training,Long> {
}
