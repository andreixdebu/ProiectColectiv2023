package com.FoodBytes.AppStart.Controller;


import com.FoodBytes.AppStart.Domain.Items;
import com.FoodBytes.AppStart.Domain.Menu;
import com.FoodBytes.AppStart.Service.MenuServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Menu")
@CrossOrigin

public class MenuController {
    @Autowired
    private MenuServiceImplementation M;

    @PostMapping("/add")
    public String add(@RequestBody Menu menu){
        M.saveMenu(menu);
        return "New Menu is added";
    }

    @PostMapping("/update")
    public String update(@RequestBody Menu menu){
        M.updateMenu(menu);
        return "Menu is updated";
    }

    @PostMapping("/delete")
    public String delete(@RequestBody Menu menu){
        M.deleteMenu(menu);
        return "Menu is updated";
    }

    @GetMapping("/getAll")
    public List<Menu> list(){

        return M.getAllMenus();
    }
}
