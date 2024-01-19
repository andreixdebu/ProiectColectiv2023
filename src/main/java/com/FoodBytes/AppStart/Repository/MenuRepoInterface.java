package com.FoodBytes.AppStart.Repository;

import com.FoodBytes.AppStart.Domain.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepoInterface extends JpaRepository<Menu,Integer> {
}
