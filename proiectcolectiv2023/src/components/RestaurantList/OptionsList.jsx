import React, {Fragment, useState} from "react";
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
        <div className="optionsListInnerBorder">
            <ul>
                {props.list.map((restaurant)=>
                    (<li className="restaurantListItems"
                         onClick={()=>handleRestaurantItemClick(restaurant)}>
                        {restaurant.name}</li>))}
            </ul>

        </div>
        </div>
)


}

export default OptionsList;