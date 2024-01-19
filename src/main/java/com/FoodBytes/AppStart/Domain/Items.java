package com.FoodBytes.AppStart.Domain;

import jakarta.persistence.*;

@Entity(name = "Items")
@Table
public class Items {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int itemID;
    private String itemName;
    private Float price;
    private String description;
    private Integer menuID;

    public Items(String i2, Float i3, String i4, Integer i5) {
        this.itemName = i2;
        this.price = i3;
        this.description = i4;
        this.menuID = i5;
    }

    public Items() {

    }

    public int getItemID() {
        return itemID;
    }

    public void setItemID(int itemID) {
        this.itemID = itemID;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String itemDescription) {
        this.description = itemDescription;
    }

    public Integer getMenuID() {
        return menuID;
    }

    public void setMenuID(Integer menuID) {
        this.menuID = menuID;
    }
}
