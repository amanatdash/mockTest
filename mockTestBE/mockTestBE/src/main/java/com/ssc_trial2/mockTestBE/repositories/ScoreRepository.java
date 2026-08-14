package com.ssc_trial2.mockTestBE.repositories; 

import com.ssc_trial2.mockTestBE.entities.Score; 
import org.springframework.data.jpa.repository.JpaRepository; 
import java.util.List; 

public interface ScoreRepository extends JpaRepository<Score, Long> { 
List<Score> findByUserId(Long userId); 
}