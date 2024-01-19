package com.FoodBytes.AppStart.Repository;

import com.FoodBytes.AppStart.Domain.Items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ItemsRepoInterface extends JpaRepository<Items,Integer> {
}
