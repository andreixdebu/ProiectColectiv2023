import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar";

let MOCK_RESERVATIONS = {
    "reservations": [
        {
            "restaurantName": "Tasty Bites",
            "userName": "Mitica Popescu",
            "personNumber": "4",
            "reservationDate": "20 October 2023",
            "reservationHour": "20:00",
            "tableLocation": "Outside"
        },
        {
            "restaurantName": "Sizzling Grill",
            "reservationDate": "19 November 2023",
            "userID": "Gica Hagi",
            "tableCapacity": "8"
        },
        {
            "restaurantName": "Seafood Paradise",
            "reservationDate": "18 September 2023",
            "userID": "Lionel Messi",
            "tableCapacity": "12"
        }
    ]
}

function Profile()
{

    return (
        <Navbar></Navbar>
    )

}

export default Profile;