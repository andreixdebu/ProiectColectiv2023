import './RestaurantListStyle.css'
function handleClick()
{
    console.log("go to menu")
    fetch('http://localhost:8080/Restaurant/getAll')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}
function GoToMenuButton() {
    return (
        <div onClick={handleClick}>
            <div className="goToMenuButtonOuterBorder"></div>
            <div  className="goToMenuButtonInnerBorder">
                Go to Menu
            </div>
        </div>
    );
}
export default GoToMenuButton;
