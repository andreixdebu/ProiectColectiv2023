package com.FoodBytes.AppStart.Service;

import com.FoodBytes.AppStart.Domain.Restaurant;
import com.FoodBytes.AppStart.Repository.RestaurantsRepoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class RestaurantServiceImplementation implements RestaurantServiceInterface {

    @Autowired
    private RestaurantsRepoInterface p;

    @Override
    public Restaurant saveR(Restaurant r) {
        return p.save(r);
    }


    public List<Restaurant> getrestaurantbytag(String tag) {
        List<Restaurant> all = p.findAll();
        List<Restaurant> sorted = new ArrayList<Restaurant>();

        for (Restaurant i : all) {
            if (i.getTags().contains(tag)) {
                sorted.add(i);
            }
        }
        return sorted;
    }

    @Override
    public List<Restaurant> getAll() {
        return p.findAll();
    }


    @Override
    public List<Restaurant> getrestaurantbyname(String tag) {
        List<Restaurant> all = p.findAll();
        List<Restaurant> sorted = new ArrayList<Restaurant>();

        for (Restaurant i : all) {
            if (i.getName_restaurant().toLowerCase().contains(tag.toLowerCase())) {
                sorted.add(i);
            }
        }
        return sorted;
    }


    @Override
    public Restaurant updateR(Restaurant r) {
        return p.save(r);

    }

    @Override
    public void deleteR(Restaurant r) {
        p.delete(r);
    }


}


