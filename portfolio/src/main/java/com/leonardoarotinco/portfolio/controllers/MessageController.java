package com.leonardoarotinco.portfolio.controllers;

import com.leonardoarotinco.portfolio.model.Message;
import com.leonardoarotinco.portfolio.service.IMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

    @Autowired
    private IMessageService messageService;

    @PostMapping("/")
    public void createMessage(@RequestBody Message message) {
        messageService.saveMessage(message);
    }
}
