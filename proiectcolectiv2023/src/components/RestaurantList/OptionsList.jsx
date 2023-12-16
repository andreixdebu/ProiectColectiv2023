import React from "react";
import './RestaurantListStyle.css'
function OptionsList(props)
{
    function handleRestaurantItemClick(item)
    {
        props.onItemSelected(item);
    }
    return (
        <div>
            <div className="optionsListOuterBorder"></div>
        <div className="optionsListInnerBorder" style={{overflowY:'scroll'}}>
            <ul>
                {props.list.restaurants.map((restaurant) => (
                    <li className="restaurantListItems"
                         // Make sure to add a unique key
                        onClick={() => handleRestaurantItemClick(restaurant)}>
                        {/*name restaurant changed*/}
                        {/*name_restaurant*/}
                        {restaurant.name}
                        <div className="restaurantListItemArrow">&#8594;</div>
                    </li>
                ))}
            </ul>

        </div>
        </div>
)


}

export default OptionsList;