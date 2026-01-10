package com.nemanja.backend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Training {
    @Id
    @GeneratedValue
    private Long id;

    private String description;

    @Enumerated(EnumType.STRING)
    private TrainingType trainingType;

    @OneToMany(mappedBy = "training", cascade = CascadeType.ALL)
    private List<Exercise> exerciseList;

    @OneToMany(mappedBy = "training", cascade = CascadeType.ALL)
    private List<Volume> volumeList;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public TrainingType getTrainingType() {
        return trainingType;
    }

    public void setTrainingType(TrainingType trainingType) {
        this.trainingType = trainingType;
    }

    public List<Exercise> getExerciseList() {
        return exerciseList;
    }

    public void setExerciseList(List<Exercise> exerciseList) {
        this.exerciseList = exerciseList;
    }

    public List<Volume> getVolumeList() {
        return volumeList;
    }

    public void setVolumeList(List<Volume> volumeList) {
        this.volumeList = volumeList;
    }

    public Long getId() {
        return id;
    }

}
