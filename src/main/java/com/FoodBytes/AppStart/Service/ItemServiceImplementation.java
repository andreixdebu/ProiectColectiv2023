package com.FoodBytes.AppStart.Service;

import com.FoodBytes.AppStart.Domain.Items;
import com.FoodBytes.AppStart.Repository.ItemsRepoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ItemServiceImplementation implements ItemServiceInterface {

    @Autowired
    private ItemsRepoInterface i;

    @Override
    public Items saveItem(Items item) {
        return i.save(item);
    }

    @Override
    public List<Items> getAllItems() {
        return i.findAll();
    }

    @Override
    public Items updateItem(Items item) {
        int t=item.getItemID();
        i.deleteById(t);
        return i.save(item);
    }

    @Override
    public void deleteItem(Items item) {
        i.delete(item);
    }


}


