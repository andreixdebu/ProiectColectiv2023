package com.FoodBytes.AppStart;

import com.FoodBytes.AppStart.Domain.Restaurant;
import com.FoodBytes.AppStart.Repository.RestaurantsRepoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

@SpringBootApplication
public class AppStartApplication implements CommandLineRunner {

	@Autowired
	private JdbcTemplate jdbcTemp;
	public static void main(String[] args) {

		SpringApplication.run(AppStartApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		String sql="SELECT * from Restaurant ";



	}
}
