package com.nemanja.backend.repository;

import com.nemanja.backend.model.Training;
import com.nemanja.backend.model.TrainingType;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TrainingRepository extends CrudRepository<Training,Long> {

    List<Training> getAllByTrainingType(TrainingType trainingType);

    List<Training> getTrainingsByDescriptionContains(String description);
}
