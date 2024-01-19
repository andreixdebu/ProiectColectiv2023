package com.FoodBytes.AppStart.Service;

import com.FoodBytes.AppStart.Domain.Users;

import java.util.List;

public interface UserServiceInterface {
    public Users saveUser(Users user);

    public List<Users> getAllUsers();

    public Users updateUser(Users user);

    public void deleteUser(Users user);
}
