package com.leonardoarotinco.portfolio.repository;

import com.leonardoarotinco.portfolio.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
}
