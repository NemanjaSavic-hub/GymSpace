package com.nemanja.backend.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Gym {
    @Id
    @GeneratedValue
    private Long id;
    @Column(nullable=false, unique = true)
    private String name;
    @Column(nullable=false)
    private String location;
    @Column(nullable=false, unique = true)
    private String image;
    @Column(nullable=false)
    private Float averageRate = 0f;

    @OneToMany(mappedBy = "gym")
    private List<Review> reviews = new ArrayList<>();

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

    public List<Review> getReviews() {
        return reviews;
    }

    public Float getAverageRate() {
        return averageRate;
    }

    public void setAverageRate() {
        var sumOfRatings = this.getReviews().stream().mapToDouble(Review::getRate).sum();
        var numberOfRatings = this.getReviews().size();
        this.averageRate = (float) sumOfRatings / numberOfRatings;
    }

    public void addReview(Review review){ this.reviews.add(review);}



}
