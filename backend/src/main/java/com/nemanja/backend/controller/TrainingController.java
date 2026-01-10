package com.nemanja.backend.controller;

import com.nemanja.backend.model.Training;
import com.nemanja.backend.service.TrainingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:5173")
@RestController
public class TrainingController {

    @Autowired
    private TrainingService trainingService;

    @PostMapping("/training")
    public Training createTraining(@RequestBody Training training){
        return this.trainingService.createTraining(training);
    }

    @GetMapping("training")
    public Iterable<Training> getAll(){
        return this.trainingService.getAll();
    }
}
