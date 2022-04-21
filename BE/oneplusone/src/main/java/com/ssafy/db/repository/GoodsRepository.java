package com.ssafy.db.repository;

import com.ssafy.db.entity.Goods;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface GoodsRepository extends JpaRepository<Goods, Long> {
    Optional<List<Goods>> findTop10ByOrderByStartDateAsc();
}
