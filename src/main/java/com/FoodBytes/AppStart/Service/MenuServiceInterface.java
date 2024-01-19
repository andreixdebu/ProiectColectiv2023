package com.FoodBytes.AppStart.Service;

import com.FoodBytes.AppStart.Domain.Menu;

import java.util.List;

public interface MenuServiceInterface {
    public Menu saveMenu(Menu menu);

    public List<Menu> getAllMenus();



    public Menu updateMenu(Menu menu);

    public void deleteMenu(Menu menu);
}
