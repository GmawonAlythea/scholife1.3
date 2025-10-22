package org.example.projprac.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/register")
    public String register() {
        return "/register.html";
    }

    @GetMapping({ "/index", "/home"})
    public String index() {
        return "/index.html"; // place index.html in static/
    }

    @GetMapping("/announcement")
    public String announcement() {
        return "/announcement.html";
    }

    @GetMapping("/organization")
    public String organization() {
        return "/organization.html";
    }

    @GetMapping("/lostandfound")
    public String lostAndFound() {
        return "/lostandfound.html";
    }

    @GetMapping("/points")
    public String points() {
        return "/points.html";
    }

    @GetMapping("/leaderboard")
    public String leaderboard() {
        return "/leaderboard.html";
    }

    @GetMapping("/reportandfeedback")
    public String reportAndFeedback() {
        return "/reportandfeedback.html";
    }

}