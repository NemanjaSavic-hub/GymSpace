package com.nemanja.backend.model;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
public class Review {
    @Id
    @GeneratedValue
    private Long id;
    private Date dateTime;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(mappedBy = "reviews")
    private List<Gym> gyms;

    public Date getDateTime() {
        return dateTime;
    }

    public void setDateTime(Date dateTime) {
        this.dateTime = dateTime;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
