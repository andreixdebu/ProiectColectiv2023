package com.FoodBytes.AppStart.Controller;

import java.util.List;

import com.FoodBytes.AppStart.Domain.Items;
import com.FoodBytes.AppStart.Service.ItemServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Items")
@CrossOrigin
public class ItemsController {
    @Autowired
    private ItemServiceImplementation IS;

    @PostMapping("/add")
    public String add(@RequestBody Items item){
        IS.saveItem(item);
        return "New Item is added";
    }

    @PostMapping("/update")
    public String update(@RequestBody Items item){
        IS.updateItem(item);
        return "Item is updated";
    }

    @PostMapping("/delete")
    public String delete(@RequestBody Items item){
        IS.deleteItem(item);
        return "Item is deleted";
    }

    @GetMapping("/getAllItems")
    public List<Items> list(){

        return IS.getAllItems();
    }
}