package com.FoodBytes.AppStart.Service;

import com.FoodBytes.AppStart.Domain.Users;
import com.FoodBytes.AppStart.Repository.UserRepoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImplementation implements UserServiceInterface {

    @Autowired
    private UserRepoInterface u;

    @Override
    public Users saveUser(Users user) {
        return u.save(user);
    }

    @Override
    public List<Users> getAllUsers() {
        return u.findAll();
    }

    @Override
    public Users updateUser(Users user) {
        int t=user.getUserID();
        u.deleteById(t);
        return u.save(user);
    }

    @Override
    public void deleteUser(Users user) {
        u.delete(user);
    }


}


