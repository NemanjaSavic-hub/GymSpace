package com.nemanja.backend.repository;

import com.nemanja.backend.model.Review;
import org.springframework.data.repository.CrudRepository;

public interface ReviewRepository extends CrudRepository<Review, Long> {
}
