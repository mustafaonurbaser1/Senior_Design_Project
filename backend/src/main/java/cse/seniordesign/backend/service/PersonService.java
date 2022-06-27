package cse.seniordesign.backend.service;

import cse.seniordesign.backend.dto.PersonDTO;
import cse.seniordesign.backend.model.Event;
import cse.seniordesign.backend.model.Person;
import cse.seniordesign.backend.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PersonService {
    private final PersonRepository personRepository;

    public List<Person> listAllUsers(){
        return personRepository.findAll();
    }

    public void addPerson(Person person){
        personRepository.save(person);
    }

    public void deletePerson(Person person) {
        personRepository.delete(person);
    }
    public void updatePerson(Person personDB,Person personNew){
        personDB.setName(personNew.getName());
        personDB.setAddress(personNew.getAddress());
        personDB.setEmail(personNew.getEmail());
        personDB.setPhoneNumber(personNew.getPhoneNumber());

    }


}
