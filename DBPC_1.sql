-- Create User table
CREATE TABLE Users (
    userID INT identity PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
	u_type varchar(100)
);
-- Create Restaurant table
CREATE TABLE Restaurant (
    restaurantID INT  identity PRIMARY KEY not null,
    name_restaurant VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    description TEXT,
	menu_id INT not null, 
	tables_avaliable int,
	total_nb_tables int, 
	picturelink text,
	tags varchar(100)
);

-- Create Menu table
CREATE TABLE Menu (
    menuID INT identity PRIMARY KEY not null,
    restaurantID INT not null ,
	menue_link varchar(300),
    FOREIGN KEY (restaurantID) REFERENCES Restaurant(restaurantID)
);

-- Create Filters table
--create table items
create table Items (
	itemID int identity primary key not null,
	itemName VARCHAR(100) NOT NULL,
    price float NOT NULL,
    description TEXT,
	menuID  int not null,
	FOREIGN KEY (menuID) REFERENCES Menu(menuID))

-- Create Cart table
CREATE TABLE Cart (
    comandid INT PRIMARY KEY,
    cartID INT ,
    userID INT not null,
    qusantity INT,
	final_price float not null,
    FOREIGN KEY (userID) REFERENCES Users(userID),
);
-- Create Tables table
CREATE TABLE TablesRes (
    tableID INT identity PRIMARY KEY,
    restaurantID INT,
    tableNumber INT NOT NULL,
    capacity INT,
    FOREIGN KEY (restaurantID) REFERENCES Restaurant(restaurantID)
);

-- Create Tables_Reservation table
CREATE TABLE Tables_Reservation (
    reservationID INT identity PRIMARY KEY not null,
    userID INT not null,
    tableID INT not null,
    reservationDateTime DATETIME not null,
    FOREIGN KEY (userID) REFERENCES Users(userID),
    FOREIGN KEY (tableID) REFERENCES Tablesres(tableID),
)

CREATE TABLE Cart_items (
	comandID int,
	itemID int,
    FOREIGN KEY (comandID) REFERENCES Cart(comandid),
    FOREIGN KEY (itemID) REFERENCES Items(itemID)
)