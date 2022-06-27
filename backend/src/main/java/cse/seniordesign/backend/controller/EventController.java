package cse.seniordesign.backend.controller;

import cse.seniordesign.backend.dto.EventDTO;
import cse.seniordesign.backend.mapper.EventMapper;
import cse.seniordesign.backend.model.Event;
import cse.seniordesign.backend.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/events")
public class EventController {
    private final EventService eventService;
    private final EventMapper eventMapper;

    @GetMapping
    public ResponseEntity<?> listAllEvents(){
        List<Event> event = eventService.listAllEvents();
        eventMapper.mapToDTO(event);
        return ResponseEntity.ok(event);
    }

    @PostMapping
    public void addEvent(@RequestBody EventDTO eventDTO) {
        Event event= eventMapper.mapToEntity(eventDTO);
        eventService.addEvent(event);
    }


}
