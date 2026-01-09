package com.nemanja.backend.service;

import com.nemanja.backend.model.Gym;
import com.nemanja.backend.model.Review;
import com.nemanja.backend.model.User;
import com.nemanja.backend.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private UserService userService;

    @Autowired
    private GymService gymService;

    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public Review createReview(Long userId, Long gymId, String text, Float rate){
        User user = userService.getUserById(userId);
        Gym gym = gymService.getGymById(gymId);
        Review newReview = new Review();
        newReview.setUser(user);
        newReview.setGym(gym);
        newReview.setText(text);
        newReview.setDateTime();
        newReview.setRate(rate);
        gym = gymService.addReviewAndChangeAvgRate(gym,newReview);
        newReview.setGym(gym);
        return reviewRepository.save(newReview);
    }
}
