package com.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.AsyncConfigurerSupport;

@SpringBootApplication
public class Main extends AsyncConfigurerSupport {
    public static void main(String[] args) {
        SpringApplication.run(Main.class);
    }
}
