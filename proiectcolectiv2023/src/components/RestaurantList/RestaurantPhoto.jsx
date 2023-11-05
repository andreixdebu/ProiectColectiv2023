import './RestaurantListStyle.css'
function RestaurantPhoto(props) {
    return (
        <div>
            <div className="restaurantPhotoOuterBorder"></div>
            <div className="restaurantPhotoInnerBorder">
                <img src={props.photo} className="restaurantPhotoStyle" alt="Restaurant Photo"/>
            </div>
        </div>
    );
}
    export default RestaurantPhoto;
