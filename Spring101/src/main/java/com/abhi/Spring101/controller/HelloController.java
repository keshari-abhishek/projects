package com.abhi.Spring101.controller;

import com.abhi.Spring101.model.Person;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;

@RestController
@RequestMapping("/hello")
public class HelloController {

    @GetMapping("/say-hello")
    public String sayHello() {
        return "Hello from Spring Boot 101 Project";
    }

    @PostMapping("/say-hello-to")
    public String sayHelloTo(@RequestBody String name){
        return "Hello "+name+" !!!!";
    }


//    @PostMappin("/test-post")
//    public HttpResponse<Person> cratePreson(@RequestBody Person person){
//
//        System.out.println("Id:" +person.getId());
//        System.out.println("Age:" +person.getAge());
//        System.out.println("Name:" +person.getName());
//        System.out.println("Email:" +person.getEmail());
//
//        new HttpResponse<Person>().body(person)
//
//    }

}
