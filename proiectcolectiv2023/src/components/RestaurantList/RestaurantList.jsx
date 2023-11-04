import React, {Fragment} from "react";
import Navbar from "../Navbar";
import OptionsList from "./OptionsList";
import RestaurantName from "./RestaurantName";
import RestaurantDescription from "./RestaurantDescription";
import RestaurantPhoto from "./RestaurantPhoto";
import GoToMenuButton from "./GoToMenuButton";
import Ad from "./Ad";



function RestaurantList()
{
    return (<Fragment>
            <Navbar></Navbar>
             <select style={{top:'97px',left:'102px',position:'absolute'}}>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
             </select>
            <input style={{top:'180px',left:'102px',position:'absolute'}}/>
            <OptionsList></OptionsList>
            <RestaurantName></RestaurantName>
            <RestaurantDescription></RestaurantDescription>
            <RestaurantPhoto></RestaurantPhoto>
            <GoToMenuButton></GoToMenuButton>
            <Ad></Ad>


            </Fragment>)

}

export default RestaurantList;
