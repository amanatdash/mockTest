package com.ssc_trial2.mockTestBE.controllers;

import com.ssc_trial2.mockTestBE.dtos.AuthResponse;
import com.ssc_trial2.mockTestBE.dtos.LoginRequest;
import com.ssc_trial2.mockTestBE.dtos.RegisterRequest;
import com.ssc_trial2.mockTestBE.services.AuthService;
import com.ssc_trial2.mockTestBE.services.JwtService;
import com.ssc_trial2.mockTestBE.repositories.UserRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthService authService;
    private final UserRepository userRepository;
    private final JwtService jwtService;

    public AuthController(AuthService authService, UserRepository userRepository, JwtService jwtService) {
        this.authService = authService;
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginUser(@RequestBody LoginRequest loginRequest) {
        System.out.println("Login endpoint hit!");
    	AuthResponse response = authService.login(loginRequest);
        if (response == null || response.getToken() == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
        return ResponseEntity.ok(response);
    }


    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        AuthResponse response = authService.register(request);
        if (response == null || response.getToken() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(@RequestHeader(value = "Authorization", required = false) String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(401).body("Missing token");
        }
        String token = authHeader.substring(7);
        if (!jwtService.validateToken(token)) {
            return ResponseEntity.status(401).body("Invalid token");
        }
        String email = jwtService.extractEmail(token);
        return userRepository.findByEmail(email)
                .map(u -> ResponseEntity.ok(u))
                .orElseGet(() -> ResponseEntity.status(404).body(null));
    }
}
