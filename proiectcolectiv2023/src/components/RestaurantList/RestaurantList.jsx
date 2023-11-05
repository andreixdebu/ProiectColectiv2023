import React, {Fragment,useState} from "react";
import Navbar from "../Navbar";
import OptionsList from "./OptionsList";
import RestaurantName from "./RestaurantName";
import RestaurantDescription from "./RestaurantDescription";
import RestaurantPhoto from "./RestaurantPhoto";
import GoToMenuButton from "./GoToMenuButton";
import Ad from "./Ad";

let MOCK_RESTAURANTS = {
    "restaurants": [
        {
            "name": "Tasty Bites",
            "description": "A fusion of flavors that will tantalize your taste buds.",
            "pictureLink": "https://linkhotel.com.sg/wp-content/uploads/sites/183/2021/03/6.jpg"
        },
        {
            "name": "Sizzling Grill",
            "description": "Grilled perfection for meat lovers.",
            "pictureLink": "https://image.architonic.com/imgArc/project-1/4/5210463/janua-reference-napagrill-zuerich-thoeny-02.jpg"
        },
        {
            "name": "Vegetarian Delight",
            "description": "Fresh and delicious vegetarian options for a healthy feast.",
            "pictureLink": "https://images.adsttc.com/media/images/5ab9/3634/f197/cc6e/5400/00b7/slideshow/0376.jpg?1522087455"
        },
        {
            "name": "Seafood Paradise",
            "description": "Dive into the ocean of flavors with our exquisite seafood dishes.",
            "pictureLink": "https://www.qantas.com/content/travelinsider/en/lifestyle/people/neil-perrys-favourite-seafood-restaurants/_jcr_content/parsysTop/hero.img.full.medium.jpg/1532411911701.jpg"
        }
    ]
}


function RestaurantList()
{
    const [availableRestaurant,setAvailableRestaurants] = useState(MOCK_RESTAURANTS.restaurants);
    const [selectedRestaurant, setSelectedRestaurant] =useState(null)

    function handleSelectedRestaurant(item)
    {
        setSelectedRestaurant(item)
    }


    return (<Fragment>
            <Navbar></Navbar>
             <select style={{top:'97px',left:'102px',position:'absolute'}}>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
             </select>
            <input style={{top:'180px',left:'102px',position:'absolute'}}/>
            <OptionsList list={availableRestaurant} onItemSelected={handleSelectedRestaurant}></OptionsList>
            {
            selectedRestaurant!=null &&
            (<Fragment>
            <RestaurantName name={selectedRestaurant.name}></RestaurantName>
            <RestaurantDescription description={selectedRestaurant.description}></RestaurantDescription>
            <RestaurantPhoto photo={selectedRestaurant.pictureLink}></RestaurantPhoto>
            <GoToMenuButton></GoToMenuButton>
            <Ad></Ad>
            </Fragment>
            )
            }


            </Fragment>)

}

export default RestaurantList;
