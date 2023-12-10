import React, { useState, useEffect, Fragment } from 'react';
import Navbar from "../Navbar";
import ReservationsList from './ReservationsList';
import './ProfileStyle.css';
import Ads from './Ads';
import RestaurantName from './RestaurantName';
import UserName from './UserName';
import PersonsNumber from './PersonsNumber';
import ReservationHour from './ReservationHour';
import TableLocation from './TableLocation';
import ReservationDate from './ReservationDate';
import MyReservations from './MyReservations';

let MOCK_RESERVATIONS = {
    "reservations": [
        {
            "restaurantName": "Tasty Bites",
            "userName": "Mitica Popescu",
            "personNumber": "4",
            "reservationDate": "20.10.2023",
            "reservationHour": "20:00",
            "tableLocation": "Afara"
        },
        {
            "restaurantName": "Klausen",
            "userName": "Gica Hagi",
            "personNumber": "8",
            "reservationDate": "6.09.2023",
            "reservationHour": "19:00",
            "tableLocation": "Inauntru"
        },
        {
            "restaurantName": "Soviet",
            "userName": "Lionel Messi",
            "personNumber": "12",
            "reservationDate": "13.05.2024",
            "reservationHour": "21:00",
            "tableLocation": "Inauntru"
        }
    ]
}

function Profile()
{

    const [availableReservation, setAvailableReservation] = useState(MOCK_RESERVATIONS.reservations);
    const [selectedReservation, setSelectedReservation] = useState(null);

    function handleSelectedReservation(item)
    {
        setSelectedReservation(item);
    }

    return (
        <Fragment>
            <Navbar />
            <Ads />
            <MyReservations />
            <ReservationsList list={availableReservation} onItemSelected={handleSelectedReservation}></ReservationsList>
            {
                selectedReservation!=null &&
                (
                    <Fragment>
                    <RestaurantName name={selectedReservation.name}></RestaurantName>
                    <UserName userName={selectedReservation.userName}></UserName>
                    <PersonsNumber personNumber={selectedReservation.personNumber}></PersonsNumber>
                    <ReservationDate reservationDate={selectedReservation.reservationDate}></ReservationDate>
                    <ReservationHour reservationHour={selectedReservation.reservationHour}></ReservationHour>
                    <TableLocation tableLocation={selectedReservation.tableLocation}></TableLocation>
                    </Fragment>
                )
            }
        </Fragment>
    )

}

export default Profile;