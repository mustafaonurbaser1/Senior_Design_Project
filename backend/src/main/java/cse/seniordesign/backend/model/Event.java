package cse.seniordesign.backend.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import java.time.LocalDateTime;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(name = "idgen", sequenceName = "EVENT_SEQ")
@Entity
public class Event extends BaseEntity{
    @Column(name="ID")
    private Long id;
    @Column(name = "NAME")
    private String name;
    @Column(name = "ADDRESS")
    private String address;
    @Column(name = "STARTDATE")
    private LocalDateTime startDate;
    @Column(name = "ENDDATE")
    private LocalDateTime endDate;
    @Column(name = "CAPACITY")
    private Integer capacity;
    @Column(name = "PICTURE")
    private String pictureUrl;
    @Column(name = "ISACTIVE")
    private Boolean isActive;
    @Column(name = "EXPLANATION")
    private String explanation;
    //Location
    @Column(name = "LATITUDE")
    private Double latitude;
    @Column(name= "LONGITUDE")
    private Double longitude;

}
