package com.ssc_trial2.mockTestBE.controllers; 

import com.ssc_trial2.mockTestBE.entities.Score; 
import com.ssc_trial2.mockTestBE.repositories.ScoreRepository; 
import org.springframework.web.bind.annotation.*; 
import java.util.List; 

@RestController 
@RequestMapping("/scores") 
@CrossOrigin(origins = "http://localhost:5173") 
public class ScoreController { 

private final ScoreRepository scoreRepository; 

public ScoreController(ScoreRepository scoreRepository) { this.scoreRepository = scoreRepository; } 

@PostMapping 
public Score submitScore(@RequestBody Score score) { return scoreRepository.save(score); } 

@GetMapping("/{userId}") 
public List<Score> getScores(@PathVariable Long userId) { return scoreRepository.findByUserId(userId); 
} 

}