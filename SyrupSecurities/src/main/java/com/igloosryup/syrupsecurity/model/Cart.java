package com.igloosryup.syrupsecurity.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Cart {

    @Id
    private Integer id;
    @Column(nullable = false)
    private int quantity;
    @OneToMany
    private List<Product> products;
    @OneToOne
    private Customer customer;
}
