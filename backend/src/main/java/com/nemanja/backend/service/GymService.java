package com.nemanja.backend.service;

import com.nemanja.backend.exception.GymNotFoundException;
import com.nemanja.backend.model.Gym;
import com.nemanja.backend.repository.GymRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GymService {

    private final GymRepository gymRepository;

    public GymService(GymRepository gymRepository) {
        this.gymRepository = gymRepository;
    }

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
}
