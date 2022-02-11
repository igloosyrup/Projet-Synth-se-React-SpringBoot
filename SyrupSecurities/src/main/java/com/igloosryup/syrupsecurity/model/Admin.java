package com.igloosryup.syrupsecurity.model;

import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public final class Admin extends User{

    private boolean hasAccess = true;

}
