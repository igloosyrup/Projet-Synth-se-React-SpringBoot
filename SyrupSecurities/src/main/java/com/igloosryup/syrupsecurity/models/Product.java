package com.igloosryup.syrupsecurity.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Data
@Entity
public class Product {

    @Id
    private Integer id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private float price;
    @Column(nullable = false)
    private int quantity;
    @Lob
    @Column(nullable = false)
    private byte[] images;
}
