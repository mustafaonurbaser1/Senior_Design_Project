package cse.seniordesign.backend.mapper;

import cse.seniordesign.backend.dto.EventDTO;
import cse.seniordesign.backend.model.Event;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface EventMapper {
    EventDTO maptoDto(Event event);
    Event mapToEntity(EventDTO eventDTO);
    List<EventDTO> mapToDTO(List<Event> eventList);
    List<Event> mapToEntity(List<EventDTO> eventDTOList);
}
