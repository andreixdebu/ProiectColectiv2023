package com.FoodBytes.AppStart.Repository;

import com.FoodBytes.AppStart.Domain.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RestaurantsRepoInterface extends JpaRepository<Restaurant,Integer> {
}
