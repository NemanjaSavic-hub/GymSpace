package com.nemanja.backend.controller;

import com.nemanja.backend.model.Gym;
import com.nemanja.backend.service.GymService;
import org.springframework.data.web.PagedModel;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/gyms")
    PagedModel<Gym> getAllGymsPaged(
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "20") int size
    ) {
        var gyms = this.gymService.getAllGymsPaged(page, size);
        return new PagedModel<>(gyms);
    }

    @PostMapping("/gym")
    Gym createGym(@RequestBody Gym newGym){
        return this.gymService.createGym(newGym);
    }

    @GetMapping("/gym/{id}")
    Gym getGymById(@PathVariable Long id){
        return this.gymService.getGymById(id);
    }

    @GetMapping("/gym/search")
    public List<Gym> getGymByNameOrLocation(@RequestParam(name = "searchText") String searchText){
        return this.gymService.getGymsByNameOrLocation(searchText);
    }
}
