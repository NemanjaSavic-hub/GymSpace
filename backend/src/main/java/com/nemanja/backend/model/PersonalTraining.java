package com.nemanja.backend.model;

import jakarta.persistence.*;

@Entity
public class PersonalTraining {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    private Training training;
}
