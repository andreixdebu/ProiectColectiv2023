package com.FoodBytes.AppStart.Service;

import com.FoodBytes.AppStart.Domain.Items;

import java.util.List;

public interface ItemServiceInterface {
    public Items saveItem(Items item);

    public List<Items> getAllItems();

    public Items updateItem(Items item);

    public void deleteItem(Items item);
}
