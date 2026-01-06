package com.nemanja.backend.controller;

import com.nemanja.backend.model.Gym;
import com.nemanja.backend.service.GymService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:5173")
@RestController
public class GymController {

    private final GymService gymService;

    public GymController(GymService gymService) {
        this.gymService = gymService;
    }

    @GetMapping("/gym")
    Iterable<Gym> getAllGyms() {
        return this.gymService.getAllGyms();
    }

    @PostMapping("/gym")
    Gym createGym(@RequestBody Gym newGym){
        return this.gymService.createGym(newGym);
    }

    @GetMapping("/gym/{id}")
    Gym getGymById(@PathVariable Long id){
        return this.gymService.getGymById(id);
    }


}
