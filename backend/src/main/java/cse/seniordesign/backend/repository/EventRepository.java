package cse.seniordesign.backend.repository;

import cse.seniordesign.backend.model.Event;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository

public interface EventRepository extends JpaRepository<Event, Long> {
    //Optional<Event> findEventbyID(String eventID);


}
