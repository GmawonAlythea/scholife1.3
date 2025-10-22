package com.example.projprac.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/register")
    public String register() {
        return "register";
    }

    @GetMapping( "/home")
    public String home() {
        return "home"; // place index.html in static/
    }

    @GetMapping( "/index")
    public String index() {
        return "index"; // place index.html in static/
    }

    @GetMapping("/announcement")
    public String announcement() {
        return "announcement";
    }

    @GetMapping("/organization")
    public String organization() {
        return "organization";
    }

    @GetMapping("/events")
    public String events() {
        return "events";
    }

    @GetMapping("/lostandfound")
    public String lostAndFound() {
        return "lostandfound";
    }

    @GetMapping("/points")
    public String points() {
        return "points";
    }

    @GetMapping("/leaderboard")
    public String leaderboard() {
        return "leaderboard";
    }

    @GetMapping("/reportandfeedback")
    public String reportAndFeedback() {
        return "reportandfeedback";
    }

    @GetMapping("/registerad")
    public String registerad() {
        return "registerad";
    }
}
