package com.nemanja.backend.service;

import com.nemanja.backend.model.Training;
import com.nemanja.backend.model.TrainingType;
import com.nemanja.backend.repository.ExerciseRepository;
import com.nemanja.backend.repository.TrainingRepository;
import com.nemanja.backend.repository.VolumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainingService {

    @Autowired
    private TrainingRepository trainingRepository;

    @Autowired
    private ExerciseRepository exerciseRepository;

    @Autowired
    private VolumeRepository volumeRepository;

    public Training createTraining(Training training) {

        if (training.getExerciseList() != null) {
            training.getExerciseList().forEach(e -> e.setTraining(training));
        }

        if (training.getVolumeList() != null) {
            training.getVolumeList().forEach(v -> v.setTraining(training));
        }

        return trainingRepository.save(training);
    }

    public List<Training> getListOfTrainingsWithType(TrainingType trainingType){
        return this.trainingRepository.getAllByTrainingType(trainingType);
    }

    public List<Training> getTrainingsByDescriptionContains(String description){
        return this.trainingRepository.getTrainingsByDescriptionContains(description);
    }

//    public Training createTraining(Training training){
//        Training newTraining = new Training();
//        var exercises = training.getExerciseList();
//        this.exerciseRepository.saveAll(exercises);
//        var volumes = training.getVolumeList();
//        this.volumeRepository.saveAll(volumes);
//        newTraining.setExerciseList(exercises);
//        newTraining.setVolumeList(volumes);
//        newTraining.setDescription(training.getDescription());
//        newTraining.setTrainingType(training.getTrainingType());
//        return this.trainingRepository.save(newTraining);
//    }

    public Iterable<Training> getAll(){
        return this.trainingRepository.findAll();
    }

}
