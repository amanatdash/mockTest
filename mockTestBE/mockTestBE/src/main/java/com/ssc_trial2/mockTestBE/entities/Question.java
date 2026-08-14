package com.ssc_trial2.mockTestBE.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="question_text", nullable=false, columnDefinition = "TEXT")
    private String questionText;

    @Column(name="section", nullable=false, columnDefinition = "TEXT")
    private String section;

    @Column(name="optionA", nullable=false, columnDefinition = "TEXT")
    private String optionA;

    @Column(name="optionB", nullable=false, columnDefinition = "TEXT")
    private String optionB;

    @Column(name="optionC", nullable=false, columnDefinition = "TEXT")
    private String optionC;

    @Column(name="optionD", nullable=false, columnDefinition = "TEXT")
    private String optionD;

    @Column(name="correct_answer", nullable=false, columnDefinition = "TEXT")
    private String correctAnswer;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getQuestionText() { return questionText; }
    public void setQuestionText(String questionText) { this.questionText = questionText; }

    public String getSection() { return section; }
    public void setSection(String section) { this.section = section; }

    public String getOptionA() { return optionA; }
    public void setOptionA(String optionA) { this.optionA = optionA; }

    public String getOptionB() { return optionB; }
    public void setOptionB(String optionB) { this.optionB = optionB; }

    public String getOptionC() { return optionC; }
    public void setOptionC(String optionC) { this.optionC = optionC; }

    public String getOptionD() { return optionD; }
    public void setOptionD(String optionD) { this.optionD = optionD; }

    public String getCorrectAnswer() { return correctAnswer; }
    public void setCorrectAnswer(String correctAnswer) { this.correctAnswer = correctAnswer; }
}
