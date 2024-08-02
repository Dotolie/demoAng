package com.example.demo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Slf4j
@Controller
public class DemoController {

    @GetMapping("hello")
    @ResponseBody
    public String hello() {
        return "hello";
    }
    @GetMapping("/api/todos")
    @ResponseBody
    public Hello todosApi() {
        Hello todos = new Hello();
        todos.setId(1);
        todos.setTitle("안녕");
        todos.setCompleted(false);

        log.warn("data:{}", "todos");
        return todos;
    }

     static class Hello {
        private int id;
        private String title;
        private boolean completed;

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public boolean isCompleted() {
            return completed;
        }

        public void setCompleted(boolean completed) {
            this.completed = completed;
        }
    }
}
