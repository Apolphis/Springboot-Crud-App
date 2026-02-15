package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/citizens")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})

public class CitizenController {

    @Autowired
    private CitizenRepository repository;

    @PostMapping
    public Citizen addCitizen(@RequestBody Citizen citizen) {return repository.save(citizen);}

    @GetMapping
    public Iterable<Citizen> getAllCitizens() {return repository.findAll();}

    @DeleteMapping("/{id}")
    public void deleteCitizen(@PathVariable Long id) {repository.deleteById(id);}
}