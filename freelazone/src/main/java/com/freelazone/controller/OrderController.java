package com.freelazone.controller;

import com.freelazone.entity.*;
import com.freelazone.service.FreelanceServiceService;
import com.freelazone.service.OrderService;
import com.freelazone.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final FreelanceServiceService serviceService;
    private final UserService userService;

    @PostMapping
    public Order create(@RequestParam UUID serviceId,
                        @RequestParam UUID clientId) {

        FreelanceService service = serviceService.getById(serviceId);
        User client = userService.getById(clientId);

        return orderService.create(service, client);
    }

    @PutMapping("/{id}")
    public Order updateStatus(@PathVariable UUID id,
                              @RequestParam OrderStatus status) {

        return orderService.updateStatus(id, status);
    }
}