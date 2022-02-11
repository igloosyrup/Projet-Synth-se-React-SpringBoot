package com.igloosryup.syrupsecurity.model;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@Data
@MappedSuperclass
public class User {

    @Id
    private Integer id;
    private String pwd;

}
