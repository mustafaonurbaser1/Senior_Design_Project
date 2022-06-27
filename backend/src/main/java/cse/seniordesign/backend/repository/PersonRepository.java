package cse.seniordesign.backend.repository;

import cse.seniordesign.backend.model.Event;
import cse.seniordesign.backend.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonRepository extends JpaRepository<Person,Long> {
    //Optional<Person> findPersonByName(String name);



}
