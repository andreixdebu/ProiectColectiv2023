package com.FoodBytes.AppStart.Domain;
import jakarta.persistence.*;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;

@Entity
@Table
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int menuID;
    private Integer restaurantID;
    private String menue_link;

    public Menu(){}

    public Menu(Integer i2,String i3){
        this.restaurantID=i2;
        this.menue_link=i3;
    }

    public int getMenuID() {
        return menuID;
    }

    public void setMenuID(int menuID) {
        this.menuID = menuID;
    }

    public Integer getRestaurantID() {
        return restaurantID;
    }

    public void setRestaurantID(Integer restaurantID) {
        this.restaurantID = restaurantID;
    }

    public String getMenue_link() {
        return menue_link;
    }

    public void setMenue_link(String menue_link) {
        this.menue_link = menue_link;
    }
}
