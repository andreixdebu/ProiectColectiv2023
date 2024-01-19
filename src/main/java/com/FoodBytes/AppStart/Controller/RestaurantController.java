package com.FoodBytes.AppStart.Controller;

import java.util.List;

import com.FoodBytes.AppStart.Domain.Restaurant;
import com.FoodBytes.AppStart.Service.RestaurantServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Restaurant")
@CrossOrigin
public class RestaurantController {
    @Autowired
    private RestaurantServiceImplementation RS;

    @PostMapping("/add")
    public String add(@RequestBody Restaurant r){
        RS.saveR(r);
        return "New Restaurant is added";
    }

    @PostMapping("/update")
    public String update(@RequestBody Restaurant r){
        RS.updateR(r);
        return "Restaurant is updated";
    }

    @PostMapping("/delete")
    public String delete(@RequestBody Restaurant r){
        RS.deleteR(r);
        return "Restaurant is deletedd";
    }

    @GetMapping("/getAll")
    public List<Restaurant> list(){
        
        return RS.getAll();
    }
    @GetMapping("/getbyname")
    public List<Restaurant> list2(@RequestBody String t){

        return RS.getrestaurantbyname(t);
    }


    @GetMapping("/getbytag")
    public List<Restaurant> list(@RequestBody String r){

        return RS.getrestaurantbytag(r);
    }


}