package com.nemanja.backend.controller;

import com.nemanja.backend.model.Review;
import com.nemanja.backend.service.ReviewSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:5173")
@RestController
public class ReviewController {

    @Autowired
    private ReviewSevice reviewSevice;

    @PostMapping("/review/user/{userId}/gym/{gymId}")
    public Review makeReview(@PathVariable Long userId, @PathVariable Long gymId, @RequestBody String text, @RequestBody Float rate){
        return this.reviewSevice.createReview(userId,gymId,text,rate);
    }
}
