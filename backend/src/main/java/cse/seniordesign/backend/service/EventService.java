package cse.seniordesign.backend.service;

import cse.seniordesign.backend.model.Event;
import cse.seniordesign.backend.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EventService {
    private final EventRepository eventRepository;

    public List<Event> listAllEvents(){
        return eventRepository.findAll();
    }
    public void addEvent(Event event) {
        eventRepository.save(event);
    }
    public void deleteEvent(Event event) {
        eventRepository.delete(event);

    }
    public void updateEvent(Event eventDB,Event eventNew){
        eventDB.setName(eventNew.getName());
        eventDB.setAddress(eventNew.getAddress());
        eventDB.setExplanation(eventNew.getExplanation());
    }

}
