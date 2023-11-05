import './RestaurantListStyle.css'
function RestaurantDescription(props) {
    return (
        <div>
            <div className="restaurantDescriptionOuterBorder"></div>
            <div className="restaurantDescriptionInnerBorder">{props.description}</div>
        </div>
    );
}
export default RestaurantDescription;
