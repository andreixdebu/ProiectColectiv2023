import './RestaurantListStyle.css'
function RestaurantName(props) {
    return (
        <div>
        <div className="restaurantNameOuterBorder"></div>
        <div className="restaurantNameInnerBorder">{props.name}</div>
        </div>
    );
}
export default RestaurantName;
