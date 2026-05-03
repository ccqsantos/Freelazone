package com.freelazone.service;

import com.freelazone.entity.Role;
import com.freelazone.entity.User;
import com.freelazone.repository.UserRepository;
import com.freelazone.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public String register(String name, String email, String password, Role role) {

        String hashed = encoder.encode(password);

        User user = User.builder()
                .name(name)
                .email(email)
                .password(hashed)
                .role(role)
                .build();

        userRepository.save(user);

        return jwtService.generateToken(user.getId(), user.getRole().name());
    }

    public String login(String email, String password) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!encoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return jwtService.generateToken(user.getId(), user.getRole().name());
    }
}