package com.ssc_trial2.mockTestBE.repositories;

import com.ssc_trial2.mockTestBE.entities.Result;
import com.ssc_trial2.mockTestBE.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResultRepository extends JpaRepository<Result, Long> {
    List<Result> findByUser(User user);
}
