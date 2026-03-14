package com.nemanja.backend.controller;

import com.nemanja.backend.model.Training;
import com.nemanja.backend.model.TrainingType;
import com.nemanja.backend.service.TrainingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedModel;
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

    @GetMapping("/search")
    public PagedModel<Training> searchTrainings(
            @RequestParam String query,
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "pageSize", defaultValue = "20") int pageSize
    ) {
        var trainings = trainingService.searchTrainings(query, page, pageSize);
        return new PagedModel<>(trainings);
    }

    @GetMapping("training/type/{trainingType}")
    public Iterable<Training> getAllByTrainingType(@PathVariable TrainingType trainingType){
        return this.trainingService.getListOfTrainingsWithType(trainingType);
    }

    @GetMapping("training/desc/{description}")
    public Iterable<Training> getTrainingsByDescriptionContains(@PathVariable String description){
        return this.trainingService.getTrainingsByDescriptionContains(description);
    }
}
