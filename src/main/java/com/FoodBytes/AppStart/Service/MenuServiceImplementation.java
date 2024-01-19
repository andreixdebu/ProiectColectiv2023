package com.FoodBytes.AppStart.Service;

import com.FoodBytes.AppStart.Domain.Menu;
import com.FoodBytes.AppStart.Repository.MenuRepoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class MenuServiceImplementation implements MenuServiceInterface{

    @Autowired
    private MenuRepoInterface i;

    @Override
    public Menu saveMenu(Menu menu) {
        return i.save(menu);
    }

    @Override
    public List<Menu> getAllMenus() {
        return i.findAll();
    }

    @Override
    public Menu updateMenu(Menu menu) {
        int t=menu.getMenuID();
        i.deleteById(t);
        return i.save(menu);
    }

    @Override
    public void deleteMenu(Menu menu) {
        i.delete(menu);
    }
}
