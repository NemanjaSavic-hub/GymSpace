package com.nemanja.backend.service;

import com.nemanja.backend.model.PersonalTraining;
import com.nemanja.backend.model.Training;
import com.nemanja.backend.model.TrainingType;
import com.nemanja.backend.model.User;
import com.nemanja.backend.repository.PersonalTrainingRepository;
import com.nemanja.backend.repository.TrainingRepository;
import com.nemanja.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonalTrainingService {

    @Autowired
    private PersonalTrainingRepository personalTrainingRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TrainingRepository trainingRepository;

    public List<PersonalTraining> getPersonalTrainingByUser(Long userId){
        return this.personalTrainingRepository.getPersonalTrainingsByUser_Id(userId);
    }

    public List<PersonalTraining> getPersonalTrainingOfUserByTrainingType(Long userId, TrainingType type){
        return this.personalTrainingRepository.getPersonalTrainingsByUser_IdAndTraining_TrainingType(userId, type);
    }
//
//    public List<PersonalTraining> getPersonalTrainingOfUserByDescription(Long userId, String description){
//        return this.personalTrainingRepository.getPersonalTrainingsByUser_IdAndTraining_Description(userId, description);
//    }

    public PersonalTraining createPersonalTraining(Long userId, Long trainingId){
        User user = userRepository.findById(userId).orElseThrow();
        Training training = trainingRepository.findById(trainingId).orElseThrow();

        PersonalTraining pt = new PersonalTraining();
        pt.setUser(user);
        pt.setTraining(training);

        return personalTrainingRepository.save(pt);
    }

    public Iterable<PersonalTraining> getAll(){
        return this.personalTrainingRepository.findAll();
    }
}
