package com.ssc_trial2.mockTestBE.entities; 

import jakarta.persistence.*; 
import java.util.Date; 

@Entity @Table(name = "scores") public class Score { 

@Id 
@GeneratedValue(strategy = GenerationType.IDENTITY) 
private Long id; 

private Long userId; 

private String testName; 

private int marks; 

private int total; 

@Temporal(TemporalType.TIMESTAMP) 
private Date date = new Date(); 


// Getters and Setters 

public Long getId() { return id; } 
public void setId(Long id) { this.id = id; } 

public Long getUserId() { return userId; } 
public void setUserId(Long userId) { this.userId = userId; } 

public String getTestName() { return testName; } 
public void setTestName(String testName) { this.testName = testName; } 

public int getMarks() { return marks; } 
public void setMarks(int marks) { this.marks = marks; } 

public int getTotal() { return total; } 
public void setTotal(int total) { this.total = total; } 

public Date getDate() { return date; } 
public void setDate(Date date) { this.date = date; } 

}
