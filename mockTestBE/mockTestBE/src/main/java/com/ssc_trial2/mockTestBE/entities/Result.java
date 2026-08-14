package com.ssc_trial2.mockTestBE.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Result {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String testName;
    private int totalQuestions;
    private int correctAnswers;
    private int incorrectAnswers;
    private int unanswered;
    private double percentage;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    //Getters and Setters
	public String getTestName() {
		return testName;
	}

	public void setTestName(String testName) {
		this.testName = testName;
	}

	public int getTotalQuestions() {
		return totalQuestions;
	}

	public void setTotalQuestions(int totalQuestions) {
		this.totalQuestions = totalQuestions;
	}

	public int getCorrectAnswers() {
		return correctAnswers;
	}

	public void setCorrectAnswers(int correctAnswers) {
		this.correctAnswers = correctAnswers;
	}

	public int getIncorrectAnswers() {
		return incorrectAnswers;
	}

	public void setIncorrectAnswers(int incorrectAnswers) {
		this.incorrectAnswers = incorrectAnswers;
	}

	public int getUnanswered() {
		return unanswered;
	}

	public void setUnanswered(int unanswered) {
		this.unanswered = unanswered;
	}

	public double getPercentage() {
		return percentage;
	}

	public void setPercentage(double percentage) {
		this.percentage = percentage;
	}

	public User getUser() {
        return user;
    }
	public void setUser(User user) {
		// TODO Auto-generated method stub
		this.user = user;
	}
}
