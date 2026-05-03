package com.freelazone.controller;

import com.freelazone.entity.FreelanceService;
import com.freelazone.entity.User;
import com.freelazone.service.FreelanceServiceService;
import com.freelazone.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/services")
@RequiredArgsConstructor
public class FreelanceServiceController {

    private final FreelanceServiceService service;
    private final UserService userService;

    @PostMapping
    public FreelanceService create(@RequestBody FreelanceService s,
                                   @RequestParam UUID freelancerId) {

        User freelancer = userService.getById(freelancerId);
        return service.create(s, freelancer);
    }

    @GetMapping
    public List<FreelanceService> list() {
        return service.findAll();
    }
}