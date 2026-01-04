package com.nemanja.backend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Gym {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String location;
    private String image;

    @ManyToMany
    @JoinTable(
            name = "gym_review",
            joinColumns = @JoinColumn(name = "gym_id"),
            inverseJoinColumns = @JoinColumn(name = "review_id")
    )
    private List<Review> reviews;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



}
