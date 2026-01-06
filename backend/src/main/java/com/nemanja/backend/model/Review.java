package com.nemanja.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@Entity
public class Review {
    @Id
    @GeneratedValue
    private Long id;
    private String dateTime;
    private String text;
    private Float rate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "gym_id")
    private Gym gym;

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime() {
        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        this.dateTime = myDateObj.format(myFormatObj);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Gym getGym() {
        return gym;
    }

    public void setGym(Gym gym) {
        this.gym = gym;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Float getRate() {
        return rate;
    }

    public void setRate(Float rate) {
        this.rate = rate;
    }

}
