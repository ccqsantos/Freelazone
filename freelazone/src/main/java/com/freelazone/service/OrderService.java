package com.freelazone.service;

import com.freelazone.entity.*;
import com.freelazone.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository repository;

    public Order create(FreelanceService service, User client) {

        Order order = Order.builder()
                .service(service)
                .client(client)
                .status(OrderStatus.PENDING)
                .build();

        return repository.save(order);
    }

    public Order updateStatus(UUID orderId, OrderStatus status) {
        Order order = repository.findById(orderId).orElseThrow();
        order.setStatus(status);
        return repository.save(order);
    }
}