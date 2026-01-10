package com.nemanja.backend.repository;

import com.nemanja.backend.model.Volume;
import org.springframework.data.repository.CrudRepository;

public interface VolumeRepository extends CrudRepository<Volume,Long> {
}
