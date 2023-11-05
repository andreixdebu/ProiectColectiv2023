import React, {Fragment} from "react";
import './RestaurantListStyle.css'
function OptionsList(props)
{
    return (
        <div>
        <div className="optionsListOuterBorder"></div>
        <div className="optionsListInnerBorder">
            <ul>
                {props.list.map((restaurant)=>
                    (<li className="restaurantListItems"
                         onClick={()=>props.onItemSelected(restaurant)}>
                        {restaurant.name}</li>))}
            </ul>

        </div>
        </div>
)


}

export default OptionsList;