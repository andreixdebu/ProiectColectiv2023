import './ProfileStyle.css'
function ReservationHour(props) {
    return (
        <div>
            <div className="reservationHourOuterBorder"></div>
            <div className="reservationHourInnerBorder">{props.reservationHour}</div>
        </div>
    );
}
export default ReservationHour;
