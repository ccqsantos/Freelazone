package com.freelazone.repository;

import com.freelazone.entity.FreelanceService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface FreelanceServiceRepository extends JpaRepository <FreelanceService, UUID> {
}
