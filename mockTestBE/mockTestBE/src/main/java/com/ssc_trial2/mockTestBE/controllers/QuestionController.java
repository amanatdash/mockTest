package com.ssc_trial2.mockTestBE.controllers;

import com.ssc_trial2.mockTestBE.entities.Question;
import com.ssc_trial2.mockTestBE.repositories.QuestionRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questions")
@CrossOrigin(origins = "http://localhost:5173")
public class QuestionController {

    private final QuestionRepository questionRepository;

    public QuestionController(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    //Get all questions in a section
    @GetMapping("/{section}")
    public List<Question> getQuestionsBySection(@PathVariable String section) {
        return questionRepository.findBySection(section);
    }

    //Add question
    @PostMapping
    public Question addQuestion(@RequestBody Question question) {
        try {
            return questionRepository.save(question);
        } catch (Exception e) {
            throw new RuntimeException("Error saving question: " + e.getMessage(), e);
        }
    }
    
    @PostMapping("/bulk")
    public ResponseEntity<?> addQuestions(@RequestBody List<Question> questions) {
        return ResponseEntity.ok(questionRepository.saveAll(questions));
    }

    //Get all questions
    @GetMapping
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }
}
