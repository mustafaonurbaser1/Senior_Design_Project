package cse.seniordesign.backend.dto;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.*;
import org.springframework.boot.context.properties.bind.DefaultValue;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;


@Builder
public class PersonDTO {
    @JsonProperty("name")
    @Size(max = 255, message = "Name cannot be longer than 255!")
    public final String name;
    @JsonProperty("address")
    public final String address;
    @JsonProperty("email")
    @Email(message = "Please enter a valid e-mail!")
    @Size(max = 255, message = "E-mail cannot be longer than 255!")
    public final String email;
    @JsonProperty("password")
    @Size(min = 8, max = 20, message = "Password must be include minimum 8 characters!")
    public final String password;
    @JsonProperty("phoneNumber")
    public final String phoneNumber;
    @JsonProperty("isAdmin")
    public final Boolean isAdmin;
    @JsonProperty("pictureUrl")
    public final String pictureUrl;

    @JsonCreator
    public PersonDTO(@JsonProperty("name") String name,
                     @JsonProperty("address") String address,
                     @JsonProperty("email") String email,
                     @JsonProperty("password") String password,
                     @JsonProperty("phoneNumber") String phoneNumber,
                     @JsonProperty("isAdmin")Boolean isAdmin,
                     @JsonProperty("pictureUrl") String pictureUrl){
        this.name=name;
        this.address=address;
        this.email=email;
        this.password=password;
        this.isAdmin=isAdmin;
        this.phoneNumber=phoneNumber;
        this.pictureUrl=pictureUrl;

    }
}
