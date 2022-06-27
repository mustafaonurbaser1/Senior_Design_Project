package cse.seniordesign.backend.controller;

import cse.seniordesign.backend.dto.PersonDTO;
import cse.seniordesign.backend.mapper.PersonMapper;
import cse.seniordesign.backend.model.Person;
import cse.seniordesign.backend.service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class PersonController {
    private final PersonService personService;
    private final PersonMapper personMapper;

    @GetMapping
    public ResponseEntity<?> listAllUsers(){
        List<Person> people = personService.listAllUsers();
        System.out.println(people);
        personMapper.mapToDto(people);
        return ResponseEntity.ok(people);
    }
    @PostMapping
    public void addPerson(@RequestBody PersonDTO personDTO) {
        Person person = personMapper.mapToEntity(personDTO);
        personService.addPerson(person);
    }
}
