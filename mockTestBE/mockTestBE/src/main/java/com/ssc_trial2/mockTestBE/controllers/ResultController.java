package com.ssc_trial2.mockTestBE.controllers;

import com.ssc_trial2.mockTestBE.entities.Result;
import com.ssc_trial2.mockTestBE.entities.User;
import com.ssc_trial2.mockTestBE.repositories.ResultRepository;
import com.ssc_trial2.mockTestBE.repositories.UserRepository;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/results")
@CrossOrigin(origins = "http://localhost:5173")
public class ResultController {

    private final ResultRepository resultRepo;
    private final UserRepository userRepo;

    public ResultController(ResultRepository resultRepo, UserRepository userRepo) {
        this.resultRepo = resultRepo;
        this.userRepo = userRepo;
    }

    // Save a new result (after test submission)
    @PostMapping("/save")
    public Result saveResult(@AuthenticationPrincipal User user, @RequestBody Result result) {
        result.setUser(user);
        return resultRepo.save(result);
    }

    // Fetch all results of the logged-in user
    @GetMapping("/my")
    public List<Result> getMyResults(@AuthenticationPrincipal User user) {
        return resultRepo.findByUser(user);
    }
}
