package com.nemanja.backend.dto;

public class MakingReviewRequestDTO {
    private String text;
    private Float rate;

    public MakingReviewRequestDTO() {}

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
