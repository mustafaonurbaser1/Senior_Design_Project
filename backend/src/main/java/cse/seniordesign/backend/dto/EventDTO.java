package cse.seniordesign.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

import java.time.LocalDateTime;
@Builder
public class EventDTO {
    public EventDTO(@JsonProperty("name") String name,
                    @JsonProperty("address") String address,
                    @JsonProperty("startDate") LocalDateTime startDate,
                    @JsonProperty("endDate") LocalDateTime endDate,
                    @JsonProperty("capacity")Integer capacity,
                    @JsonProperty("pictureUrl")String pictureUrl,
                    @JsonProperty("isActive")Boolean isActive,
                    @JsonProperty("explanation") String explanation,
                    @JsonProperty("latitude")Double latitude,
                    @JsonProperty("longitude")Double longitude) {
        this.name = name;
        this.address = address;
        this.startDate = startDate;
        this.endDate = endDate;
        this.capacity = capacity;
        this.pictureUrl = pictureUrl;
        this.isActive = isActive;
        this.explanation = explanation;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    @JsonProperty("name")
    public final String name;
   @JsonProperty("address")
    public final  String address;
   @JsonProperty("startDate")
    public final  LocalDateTime startDate;
   @JsonProperty("endDate")
    public final LocalDateTime endDate;
   @JsonProperty("capacity")
    public final Integer capacity;
   @JsonProperty("pictureUrl")
    public final String pictureUrl;
   @JsonProperty("isActive")
    public final Boolean isActive;
   @JsonProperty("explanation")
    public final String explanation;
    //Location
    @JsonProperty("latitude")
    public final Double latitude;
    @JsonProperty("longitude")
    public final Double longitude;
}
