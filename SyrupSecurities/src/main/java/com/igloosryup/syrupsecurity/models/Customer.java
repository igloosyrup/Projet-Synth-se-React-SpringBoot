package com.igloosryup.syrupsecurity.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;

@Data
@Entity
public class Customer extends User{

    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Column(unique = true, nullable = false)
    private String email;
    @Column(unique = true, nullable = false)
    private String phoneNumber;
    @Column(nullable = false)
    private String aptNumber;
    @Column(nullable = false)
    private String postalCode;
    @Column(nullable = false)
    private String country;
    @Column(nullable = false)
    private String city;

}
