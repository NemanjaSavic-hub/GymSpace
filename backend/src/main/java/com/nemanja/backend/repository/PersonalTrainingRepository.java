package com.nemanja.backend.repository;

import com.nemanja.backend.model.PersonalTraining;
import com.nemanja.backend.model.TrainingType;
import com.nemanja.backend.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PersonalTrainingRepository extends CrudRepository<PersonalTraining, Long> {
    List<PersonalTraining> getPersonalTrainingsByUser_Id(Long userId);

    List<PersonalTraining> getPersonalTrainingsByUser_IdAndTraining_TrainingType(Long userId, TrainingType type);

}
