-- Insert data into Users table
INSERT INTO Users (email, password, u_type)
VALUES 
    ('calinandreichis2003@gmail.com', 'Calin2003', 'admin'),
    ('adminuserfoodbytes@gmail.com', 'PC2024', 'admin'),
    ('customer@gmail.com', 'customerpassword', 'customer');

-- Insert data into Restaurant table
INSERT INTO Restaurant (name_restaurant, address, description, menu_id, tables_avaliable, total_nb_tables, picturelink, tags)
VALUES 
    ('KFC', 'Strada Iuliu Maniu Nr. 1', 'a global chicken restaurant brand with a rich, decades-long history of success', 1, 20, 30, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcluj.fest.ro%2Flocuri%2Ffast-food%2Fkfc-centru&psig=AOvVaw1xWj5VI58sVKwSF5q7zR7G&ust=1705842474332000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIjm2ciE7IMDFQAAAAAdAAAAABAD', 'FastFood; Burger'),
    ('Chios', 'Central Parck Cluj-Napoca', 'Aducem oamenii împreună, pentru o comunitate unită, solidară și o identitate autentică în Cluj-Napoca. #TogetherAsOne.', 2, 15, 25, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.chios.ro%2Fwp-content%2Fuploads%2F2020%2F06%2F13403191_10153751519117887_6326330941746650754_o-1024x765.jpg&tbnid=65xAjRT2bN7SOM&vet=12ahUKEwjcsKOVi-yDAxXki_0HHZ-FD9oQMygAegQIARBP..i&imgrefurl=https%3A%2F%2Fwww.chios.ro%2Frezervari%2F&docid=8Wj866aoELy6lM&w=1024&h=765&q=chios%20cluj&ved=2ahUKEwjcsKOVi-yDAxXki_0HHZ-FD9oQMygAegQIARBP', 'Romantic; Burger; Italian; Pizza'),
	('McDonalds', 'Piața Mihai Viteazu 1', 'one of the world s largest and most recognized fast-food chains', 1, 20, 30, 'https://lh3.googleusercontent.com/p/AF1QipOL48PMH0_06Hk7eyR2M9Hh8-3d62edTrz2ZS_Y=s156-w156-h108-n-k-no', 'FastFood; Burger');

-- Insert data into Menu table
INSERT INTO Menu (restaurantID, menue_link)
VALUES 
    (1, 'https://www.kfc.ro/meniu/meniuri'),
    (2, 'https://www.chios.ro/MENIU.pdf'),
	(3, 'https://www.mcdonalds.ro/produse/meniuri');

-- Insert data into Items table
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Spaghetti Bolognese', 32.99, 'Classic Italian pasta with meat sauce.', 2),
    ('Burger and Fries', 49.99, 'Juicy beef burger with crispy fries.', 2),
    ('Margherita Pizza', 30.99, 'Traditional Italian pizza with tomato and mozzarella.', 2);

-- Insert data into Cart table

-- Assume an exchange rate of 5.5 RON for 1 GBP

-- Classic Meals
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Fillet Meal (Large)', 32.39, 'Classic Fillet burger with fries and a large drink.', 1),
    ('Zinger Meal (Large)', 32.39, 'Spicy Zinger burger with fries and a large drink.', 1);

-- Burger Meals
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Fillet', 29.64, 'Classic Fillet burger.', 1),
    ('Zinger', 29.64, 'Spicy Zinger burger.', 1),
    ('Fillet Tower', 32.94, 'Fillet burger with additional layers.', 1),
    ('Zinger Tower', 32.94, 'Zinger burger with additional layers.', 1),
    ('Zinger Stacker', 37.89, 'Stacked Zinger burger.', 1);

-- Box Meals
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Fillet Box Meal', 36.79, 'Fillet burger with fries and a drink.', 1),
    ('Zinger Box Meal', 36.79, 'Zinger burger with fries and a drink.', 1),
    ('Fillet Tower Box Meal', 39.54, 'Fillet Tower burger with fries and a drink.', 1),
    ('Zinger Tower Box Meal', 39.54, 'Zinger Tower burger with fries and a drink.', 1);

-- Toasted Twister
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Original Recipe Twister', 24.69, 'Toasted wrap with Original Recipe chicken.', 1);

-- Original Recipe
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('3 Pieces Original Recipe', 27.44, '3 pieces of Original Recipe chicken.', 1),
    ('2 Pieces Original Recipe', 21.94, '2 pieces of Original Recipe chicken.', 1);

-- Variety
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Variety Meal', 27.44, '2 Pieces Original Recipe, 2 Hot Wings & Mini Breast Fillet.', 1);

-- Popcorn Chicken
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Small Popcorn Chicken', 10.94, 'Small box of Popcorn Chicken.', 1),
    ('Regular Popcorn Chicken', 17.54, 'Regular box of Popcorn Chicken.', 1);

-- BBQ Rancher
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('BBQ Rancher Burger', 24.69, 'BBQ Rancher Burger.', 1),
    ('BBQ Rancher Twister', 25.24, 'BBQ Rancher Twister wrap.', 1),
    ('BBQ Rancher Salad', 27.44, 'BBQ Rancher Salad.', 1);

-- Cajun Boxmaster
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Cajun Boxmaster', 27.44, 'Cajun Boxmaster Burger.', 1);

-- Boneless Dips Meal
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('3 Mini Fillets Meal', 27.44, 'Meal with 3 Mini Fillets and 2 dips.', 1),
    ('4 Mini Fillets Meal', 32.94, 'Meal with 4 Mini Fillets and 2 dips.', 1);

-- Kids Choice
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Kids Choice', 16.44, 'Choose one from each step for kids.', 1);

-- Deli Deluxe
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('BBQ Rancher Burger Deluxe Meal', 27.44, 'Deli Deluxe Meal with BBQ Rancher Burger.', 1),
    ('Cajun Boxmaster Deluxe Meal', 27.44, 'Deli Deluxe Meal with Cajun Boxmaster.', 1);

-- Sharing Meals
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Bargain Bucket (6 Pieces)', 71.44, 'Bargain Bucket with 4 fries.', 1),
    ('Bargain Bucket (10 Pieces)', 87.94, 'Bargain Bucket with 4 fries.', 1),
    ('Bargain Bucket (14 Pieces)', 104.94, 'Bargain Bucket with 4 fries.', 1);

-- Add More
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('4 Pieces or 4 Mini Breast Fillets', 18.64, 'Add more: 4 Pieces or 4 Mini Breast Fillets.', 1),
    ('8 Hot Wings', 18.64, 'Add more: 8 Hot Wings.', 1);


-- Assume an exchange rate of 5.5 RON for 1 GBP

-- Chicken Legend
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Chicken Legend with Cool Mayo', 21.94, 'Chicken Legend with Cool Mayo.', 3),
    ('Chicken Legend with Hot & Spicy Mayo', 21.94, 'Chicken Legend with Hot & Spicy Mayo.', 3),
    ('Chicken Legend with BBQ Sauce', 21.94, 'Chicken Legend with BBQ Sauce.', 3);

-- Chicken Selects
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Chicken Selects 3 pieces', 18.64, '3 pieces of Chicken Selects.', 3),
    ('Chicken Selects 5 pieces', 24.19, '5 pieces of Chicken Selects.', 3);

-- Burgers
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Big Mac', 18.64, 'Iconic Big Mac.', 3),
    ('Quarter Pounder with Cheese', 18.64, 'Quarter Pounder with Cheese.', 3),
    ('Filet-O-Fish', 18.64, 'Filet-O-Fish.', 3),
    ('McChicken Sandwich', 18.64, 'Classic McChicken Sandwich.', 3);

-- Chicken McNuggets
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Chicken McNuggets 6 pieces', 18.64, '6 pieces of Chicken McNuggets.', 3),
    ('Chicken McNuggets 9 pieces', 20.29, '9 pieces of Chicken McNuggets.', 3),
    ('Chicken McNuggets 20 piece share box', 28.54, '20 pieces of Chicken McNuggets share box.', 3);

-- Burgers and Sandwiches
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Cheeseburger', 6.54, 'Classic Cheeseburger.', 3),
    ('Hamburger', 5.44, 'Classic Hamburger.', 3);

-- Salads
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Grilled Chicken Salad', 19.74, 'Grilled Chicken Salad.', 3),
    ('Grilled Chicken & Bacon Salad', 21.44, 'Grilled Chicken & Bacon Salad.', 3),
    ('Crispy Chicken Salad', 19.74, 'Crispy Chicken Salad.', 3),
    ('Crispy Chicken & Bacon Salad', 21.44, 'Crispy Chicken & Bacon Salad.', 3);

-- Deli Choices - Wraps or Sandwiches
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Grilled Chicken Salad', 20.84, 'Deli Grilled Chicken Salad.', 3),
    ('Grilled Chicken Salad & Bacon', 21.94, 'Deli Grilled Chicken Salad & Bacon.', 3),
    ('Crispy Chicken', 20.84, 'Deli Crispy Chicken.', 3),
    ('Crispy Chicken & Bacon', 21.94, 'Deli Crispy Chicken & Bacon.', 3);

-- French Fries
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Small Fries', 5.44, 'Small French Fries.', 3),
    ('Medium Fries', 6.54, 'Medium French Fries.', 3),
    ('Large Fries', 7.79, 'Large French Fries.', 3);

-- Saver Menu
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Double Cheeseburger', 9.29, 'Double Cheeseburger from the Saver Menu.', 3),
    ('Mayo Chicken', 7.09, 'Mayo Chicken from the Saver Menu.', 3),
    ('Cheeseburger', 7.09, 'Cheeseburger from the Saver Menu.', 3),
    ('Shaker Side Salad', 7.09, 'Shaker Side Salad from the Saver Menu.', 3),
    ('Sundaes Strawberry / Toffee', 7.09, 'Sundaes Strawberry / Toffee from the Saver Menu.', 3),
    ('Medium Fries', 7.09, 'Medium French Fries from the Saver Menu.', 3),
    ('McFlurry Various', 7.09, 'McFlurry Various from the Saver Menu.', 3);

-- Happy Meal
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Cheeseburger Happy Meal', 16.44, 'Happy Meal with Cheeseburger.', 3),
    ('Hamburger Happy Meal', 16.44, 'Happy Meal with Hamburger.', 3),
    ('Chicken McNuggets 4 pieces Happy Meal', 16.44, 'Happy Meal with 4 pieces of Chicken McNuggets.', 3),
    ('Fish Fingers Happy Meal', 16.44, 'Happy Meal with Fish Fingers.', 3),
    ('Vegan Wrap Happy Meal', 16.44, 'Happy Meal with Vegan Wrap.', 3),
    ('Carrot Sticks', 5.44, 'Individual price for Carrot Sticks.', 3);



-- Assume an exchange rate of 5.5 RON for 1 GBP

-- Scotch Eggs with a Twist
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Scotch Eggs with a Twist (1 piece)', 39, 'Mixed salad, quail eggs, baby corn, cherry tomatoes, wasabi sauce, pork and shrimp mix in panko breadcrumbs.', 2),
    ('Scotch Eggs with a Twist (2 pieces)', 78, 'Mixed salad, quail eggs, baby corn, cherry tomatoes, wasabi sauce, pork and shrimp mix in panko breadcrumbs.', 2),
    ('Scotch Eggs with a Twist (3 pieces)', 117, 'Mixed salad, quail eggs, baby corn, cherry tomatoes, wasabi sauce, pork and shrimp mix in panko breadcrumbs.', 2),
    ('Scotch Eggs with a Twist (6 pieces)', 234, 'Mixed salad, quail eggs, baby corn, cherry tomatoes, wasabi sauce, pork and shrimp mix in panko breadcrumbs.', 2),
    ('Scotch Eggs with a Twist (12 pieces)', 468, 'Mixed salad, quail eggs, baby corn, cherry tomatoes, wasabi sauce, pork and shrimp mix in panko breadcrumbs.', 2);

-- Omeleta Franceasca
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Omeleta Franceasca', 35, 'Eggs, caramelized onions, prosciutto crudo.', 2);

-- Shakshuka
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Shakshuka', 37, 'Poached eggs, tomatoes, peppers, onions, cumin, toast.', 2);

-- Crunchy Breakfast
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Crunchy Breakfast', 42, 'Mixed salad, burrata, cherry tomatoes, asparagus, ciabatta, pancetta, spicy sweet sauce.', 2);

-- Terci de Ovaz cu Fructe
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Terci de Ovaz cu Fructe', 37, 'Oatmeal, milk, caramelized nuts, berries, honey.', 2);

-- Optionally with plant-based milk
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Terci de Ovaz cu Fructe (with plant-based milk)', 37, 'Oatmeal, plant-based milk, caramelized nuts, berries, honey.', 2);


-- Assume an exchange rate of 5.5 RON for 1 GBP

-- Classic Hummus
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Classic Hummus', 31, 'Chickpeas, tahini, olive oil, pine buds, focaccia.', 2);

-- Plate of Cheeses
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Plate of Cheeses', 89, 'Cheese specialties, breadsticks, grapes, caramelized nuts, kalamata olives, mixed salad.', 2);

-- Plate Selection of Cold Cuts
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Plate Selection of Cold Cuts', 74, 'Selection of cold cuts, breadsticks, cherry tomatoes, kalamata olives, mixed salad.', 2);

-- Eggplant Salad with Focaccia
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Eggplant Salad with Focaccia', 31, 'Eggplant, pepper jam, cherry tomatoes, mixed salad.', 2);

-- Vitello Tonnato
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Vitello Tonnato', 129, 'Aged beef tenderloin, tuna foam, mixed salad, cherry tomatoes. *Recommended for 2 people.', 2);

-- Sweet & Sour Tofu
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Sweet & Sour Tofu', 45, 'Tofu with dill, soy sauce, walnut core, butter, apples, crackers.', 2);

-- Shrimp Saganaki
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Shrimp Saganaki', 59, 'Shrimp, garlic, cherry tomatoes, butter, feta, toast, tomato sauce.', 2);

-- Chickpeas with Curry and Fried Rice
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Chickpeas with Curry and Fried Rice', 43, 'Chickpeas, curry, garam masala, coconut milk, basmati rice.', 2);

-- Risotto with Edamame and Asparagus
INSERT INTO Items (itemName, price, description, menuID)
VALUES 
    ('Risotto with Edamame and Asparagus', 59, 'Asparagus, edamame, parmesan, sweet cream, arborio rice, pesto sauce, pine buds.', 2);
