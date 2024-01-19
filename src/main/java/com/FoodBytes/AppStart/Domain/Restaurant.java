package com.FoodBytes.AppStart.Domain;

import jakarta.persistence.*;

@Entity
@Table
public class Restaurant {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int restaurantID;
    private String name_restaurant;
    private String description;
    private String address;
    private int menu_id ;
    private int tables_avaliable;
    private int total_nb_tables;


    private String picturelink;

    private String tags;

    public Restaurant(){

    }

    public Restaurant(String a2,String a8,String a3,int a4,int a5,String  a6,int a7,String a9){

        this.name_restaurant=a2;
        this.address=a8;
        this.description=a3;
        this.menu_id=a4;
        this.tables_avaliable=a5;
        this.total_nb_tables =a7;
        this.picturelink=a6;
        this.tags=a9;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String adress) {
        this.address = adress;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public int getRestaurantID() {
        return restaurantID;
    }

    public void setRestaurantID(int restaurantID) {
        this.restaurantID = restaurantID;
    }

    public String getName_restaurant() {
        return name_restaurant;
    }

    public void setName_restaurant(String name_restaurant) {
        this.name_restaurant = name_restaurant;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getMenu_id() {
        return menu_id;
    }

    public void setMenu_id(int menu_id) {
        this.menu_id = menu_id;
    }

    public int getTables_avaliable() {
        return tables_avaliable;
    }

    public void setTables_avaliable(int tables_avaliable) {
        this.tables_avaliable = tables_avaliable;
    }

    public int getTotal_nb_tables() {
        return total_nb_tables;
    }

    public void setTotal_nb_tables(int total_nr_tables) {
        this.total_nb_tables = total_nr_tables;
    }

    public String getPicturelink() {
        return picturelink;
    }

    public void setPicturelink(String picturelink) {
        this.picturelink = picturelink;
    }
}

