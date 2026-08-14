package com.ssc_trial2.mockTestBE.services;

import com.ssc_trial2.mockTestBE.dtos.AuthResponse;
import com.ssc_trial2.mockTestBE.dtos.LoginRequest;
import com.ssc_trial2.mockTestBE.dtos.RegisterRequest;
import com.ssc_trial2.mockTestBE.entities.User;
import com.ssc_trial2.mockTestBE.repositories.UserRepository;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    
    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtService.generateToken(user);

        return new AuthResponse(token, user.getId(), user.getName());
    }


    public AuthResponse register(RegisterRequest req) {
        if (userRepository.findByEmail(req.getEmail()).isPresent()) {
            throw new RuntimeException("Email exists");
        }
        User u = new User();
        u.setName(req.getName());
        u.setEmail(req.getEmail());
        u.setPassword(passwordEncoder.encode(req.getPassword())); // hash
        u.setNew(true);
        userRepository.save(u);
        
        String token = jwtService.generateToken(u);
        return new AuthResponse(token, u.getId(), u.getName());
    }
    
    
    public ResponseEntity<?> getCurrentUser(String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(401).body("Unauthorized");
        }
        String token = authHeader.substring(7);
        String email = jwtService.extractEmail(token);
        Optional<User> user = userRepository.findByEmail(email);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body(null));

    }
}
