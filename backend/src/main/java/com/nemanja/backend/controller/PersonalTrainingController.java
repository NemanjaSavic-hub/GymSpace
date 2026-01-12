package com.nemanja.backend.controller;

import com.nemanja.backend.model.PersonalTraining;
import com.nemanja.backend.model.TrainingType;
import com.nemanja.backend.service.PersonalTrainingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
public class PersonalTrainingController {

    @Autowired
    private PersonalTrainingService personalTrainingService;

    @GetMapping("/personalTraining/user/{userId}")
    public List<PersonalTraining> getPersonalTrainingsByUserId(@PathVariable Long userId){
        return this.personalTrainingService.getPersonalTrainingByUser(userId);
    }

    @GetMapping("/personalTraining/user/{userId}/trainingtype/{trainingType}")
    public List<PersonalTraining> getPersonalTrainingsByTrainingType(@PathVariable Long userId, @PathVariable TrainingType trainingType){
        return this.personalTrainingService.getPersonalTrainingOfUserByTrainingType(userId, trainingType);
    }

//    @GetMapping("/personalTraining/user/{userId}/description")
//    public List<PersonalTraining> getPersonalTrainingsByTrainingType(@PathVariable Long userId, @RequestBody String description){
//        return this.personalTrainingService.getPersonalTrainingOfUserByDescription(userId,description);
//    }

    @PostMapping("/personalTraining/user/{userId}/training/{trainingId}")
    public PersonalTraining createPersonalTraining(@PathVariable Long userId, @PathVariable Long trainingId){
        return this.personalTrainingService.createPersonalTraining(userId,trainingId);
    }
}
