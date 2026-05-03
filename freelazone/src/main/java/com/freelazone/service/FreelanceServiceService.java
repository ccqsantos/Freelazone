package com.freelazone.service;

import com.freelazone.entity.FreelanceService;
import com.freelazone.entity.User;
import com.freelazone.repository.FreelanceServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FreelanceServiceService {

    private final FreelanceServiceRepository repository;

    public FreelanceService create(FreelanceService service, User freelancer) {
        service.setFreelancer(freelancer);
        return repository.save(service);
    }

    public List<FreelanceService> findAll() {
        return repository.findAll();
    }

    public FreelanceService getById(UUID id) {
        return repository.findById(id).orElseThrow();
    }
}