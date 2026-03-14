package com.nemanja.backend.service;

import com.nemanja.backend.model.Training;
import com.nemanja.backend.model.TrainingType;
import com.nemanja.backend.repository.ExerciseRepository;
import com.nemanja.backend.repository.TrainingRepository;
import com.nemanja.backend.repository.VolumeRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class TrainingService {

    @Autowired
    private TrainingRepository trainingRepository;

    @Autowired
    private EntityManager entityManager;

    public Training createTraining(Training training) {

        if (training.getExerciseList() != null) {
            training.getExerciseList().forEach(e -> e.setTraining(training));
        }

        if (training.getVolumeList() != null) {
            training.getVolumeList().forEach(v -> v.setTraining(training));
        }

        return trainingRepository.save(training);
    }

    public Page<Training> searchTrainings(String query, int page, int pageSize ) {
        Pageable pageable = PageRequest.of(page, pageSize);
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Training> cq = cb.createQuery(Training.class);

        Root<Training> rootTraining = cq.from(Training.class);

        List<Predicate> predicates = new ArrayList<>();

        if (query != null && !query.isBlank()) {

            String likeQuery = "%" + query.toLowerCase() + "%";

            Predicate descriptionPredicate =
                    cb.like(cb.lower(rootTraining.get("description")), likeQuery);

            Predicate typePredicate =
                    cb.like(cb.lower(rootTraining.get("trainingType").as(String.class)), likeQuery);

            predicates.add(cb.or(descriptionPredicate, typePredicate));
        }

        cq.where(predicates.toArray(new Predicate[0]));

        TypedQuery<Training> typedQuery = entityManager.createQuery(cq);

        typedQuery.setFirstResult(page * pageSize);
        typedQuery.setMaxResults(pageSize);

        List<Training> resultList = typedQuery.getResultList();

        // count query
        CriteriaQuery<Long> countQuery = cb.createQuery(Long.class);
        Root<Training> countRoot = countQuery.from(Training.class);

        countQuery.select(cb.count(countRoot));

        if (!predicates.isEmpty()) {
            countQuery.where(predicates.toArray(new Predicate[0]));
        }

        Long total = entityManager.createQuery(countQuery).getSingleResult();

        return new PageImpl<>(resultList, PageRequest.of(page, pageSize), total);

    }

    public List<Training> getListOfTrainingsWithType(TrainingType trainingType){
        return this.trainingRepository.getAllByTrainingType(trainingType);
    }

    public List<Training> getTrainingsByDescriptionContains(String description){
        return this.trainingRepository.getTrainingsByDescriptionContains(description);
    }

    public Iterable<Training> getAll(){
        return this.trainingRepository.findAll();
    }

}
