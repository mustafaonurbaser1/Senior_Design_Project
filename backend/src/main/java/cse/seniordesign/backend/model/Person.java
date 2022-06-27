package cse.seniordesign.backend.model;

import lombok.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.bind.DefaultValue;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.Set;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(name="idgen",sequenceName = "PERSON_SEQ")
@Entity
public class Person extends BaseEntity{

    @Column(name = "NAME")
    private String name;
    @Column(name="ADDRESS")
    private String address;
    @Column(name = "EMAIL",unique = true)
    private String email;
    @Column(name = "PASSWORD")
    private String password;
    @Column(name = "PHONENUMBER", unique = true)
    @Pattern(regexp = "(^[0\\s]?[\\s]?)([(]?)([5])([0-9]{2})([)]?)([\\s]?)([0-9]{3})([\\s]?)([0-9]{2})([\\s]?)([0-9]{2})$", message = "Number should be controlled!")
    private String phoneNumber;
    @Column(name = "ISADMIN")
    private Boolean isAdmin;
    @Column(name = "PICTURE")
    private String pictureUrl;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name="ID")
    private Set<Event> events;

    public boolean joinEvent(String eventName) {
        return events.stream().anyMatch(it -> it.getName().equals(eventName));
    }
}

