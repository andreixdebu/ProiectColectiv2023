import React from "react";
import './RestaurantListStyle.css'
function OptionsList(props)
{
    function handleRestaurantItemClick(item)
    {
        props.onItemSelected(item);
    }
    return (
        <div >
        <div className="optionsListOuterBorder"></div>
        <div className="optionsListInnerBorder" style={{overflowY:'scroll'}}>
            <ul>
                {props.list.map((restaurant)=>
                    (<li className="restaurantListItems"
                         onClick={()=>handleRestaurantItemClick(restaurant)}>
                        {restaurant.name}
                        <div className="restaurantListItemArrow">&#8594;</div>
                    </li>))}
            </ul>

        </div>
        </div>
)


}

export default OptionsList;