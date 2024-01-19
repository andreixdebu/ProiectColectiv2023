package com.FoodBytes.AppStart.Controller;

import java.util.List;

import com.FoodBytes.AppStart.Domain.Users;
import com.FoodBytes.AppStart.Service.UserServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Users")
@CrossOrigin
public class UserController {
    @Autowired
    private UserServiceImplementation US;

    @PostMapping("/add")
    public String add(@RequestBody Users user){
        US.saveUser(user);
        return "New User is added";
    }

    @PostMapping("/update")
    public String update(@RequestBody Users user){
        US.updateUser(user);
        return "User is updated";
    }

    @PostMapping("/delete")
    public String delete(@RequestBody Users user){
        US.deleteUser(user);
        return "User is deleted";
    }

    @GetMapping("/getAll")
    public List<Users> list(){

        return US.getAllUsers();
    }
}