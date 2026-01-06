package com.nemanja.backend.service;

import com.nemanja.backend.exception.GymNotFoundException;
import com.nemanja.backend.model.Gym;
import com.nemanja.backend.repository.GymRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GymService {

    @Autowired
    private GymRepository gymRepository;
    @Autowired
    private EntityManager em;


    public Gym createGym(Gym newGym) {
        return this.gymRepository.save(newGym);
    }

    public Iterable<Gym> getAllGyms(){
        return this.gymRepository.findAll();
    }

    public Gym getGymById(Long id){
        var gym = this.gymRepository.findById(id);
        if(gym.isPresent()){
            return gym.get();
        }
        throw new GymNotFoundException(id);
    }

    public List<Gym> getGymsByNameOrLocation(String searchText){
        CriteriaBuilder criteriaBuilder = em.getCriteriaBuilder();
        CriteriaQuery<Gym> criteriaQuery = criteriaBuilder.createQuery(Gym.class);

        List<Predicate> predicates = new ArrayList<>();
        //select FROM gym:
        Root<Gym> root = criteriaQuery.from(Gym.class);
        if(searchText != null){
            Predicate gymNamePredicate = criteriaBuilder
                    .like(root.get("name"), "%" + searchText + "%");
            predicates.add(gymNamePredicate);
            Predicate gymLocationPredicate = criteriaBuilder
                    .like(root.get("location"), "%" + searchText + "%");
            predicates.add(gymLocationPredicate);
        }//where:
        criteriaQuery.where(
                criteriaBuilder.or(predicates.toArray(new Predicate[0]))
        );
        TypedQuery<Gym> query = em.createQuery(criteriaQuery);
        return query.getResultList();
    }
}
