package cse.seniordesign.backend.mapper;

import cse.seniordesign.backend.dto.PersonDTO;
import cse.seniordesign.backend.model.Person;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PersonMapper {
    PersonDTO mapToDto(Person person);
    Person mapToEntity(PersonDTO personDTO);
    List<PersonDTO> mapToDto(List<Person> personList);
    List<Person> mapToEntity(List<PersonDTO> personDTOList);
}
