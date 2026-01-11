package com.nemanja.backend.service;

import com.nemanja.backend.model.PersonalTraining;
import com.nemanja.backend.repository.PersonalTrainingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonalTrainingService {

    @Autowired
    private PersonalTrainingRepository personalTrainingRepository;

    public List<PersonalTraining> getPersonalTrainingByUser(Long userId){
        return this.personalTrainingRepository.getPersonalTrainingsByUser_Id(userId);
    }



    public Iterable<PersonalTraining> getAll(){
        return this.personalTrainingRepository.findAll();
    }
}
