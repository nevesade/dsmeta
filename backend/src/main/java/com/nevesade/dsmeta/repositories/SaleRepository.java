package com.nevesade.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nevesade.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
}
