package com.FoodBytes.AppStart.Repository;

import com.FoodBytes.AppStart.Domain.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepoInterface extends JpaRepository<Users,Integer> {
}
