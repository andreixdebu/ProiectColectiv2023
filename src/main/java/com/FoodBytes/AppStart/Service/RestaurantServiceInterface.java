package com.FoodBytes.AppStart.Service;

import com.FoodBytes.AppStart.Domain.Restaurant;

import java.util.List;

public interface RestaurantServiceInterface {
    public Restaurant saveR(Restaurant r);

    public List<Restaurant> getAll();


    public  List<Restaurant> getrestaurantbytag(String T);

    public List<Restaurant> getrestaurantbyname(String T);

    public Restaurant updateR(Restaurant r);

    public void deleteR(Restaurant r);
}
