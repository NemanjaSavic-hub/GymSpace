package com.nemanja.backend.controller;

import com.nemanja.backend.dto.MakingReviewRequestDTO;
import com.nemanja.backend.model.Review;
import com.nemanja.backend.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:5173")
@RestController
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/review/user/{userId}/gym/{gymId}")
    public Review makeReview(@PathVariable Long userId, @PathVariable Long gymId, @RequestBody MakingReviewRequestDTO dto){
        return this.reviewService.createReview(userId,gymId,dto.getText(),dto.getRate());
    }
}
