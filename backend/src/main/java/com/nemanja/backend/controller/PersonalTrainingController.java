package com.nemanja.backend.controller;

import com.nemanja.backend.model.PersonalTraining;
import com.nemanja.backend.service.PersonalTrainingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:5173")
@RestController
public class PersonalTrainingController {

    @Autowired
    private PersonalTrainingService personalTrainingService;

    @PostMapping("/personalTraining/user/{userId}/training/{trainingId}")
    public PersonalTraining createPersonalTraining(@PathVariable Long userId, @PathVariable Long trainingId){
        return this.personalTrainingService.createPersonalTraining(userId,trainingId);
    }
}
