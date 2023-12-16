import React, {Fragment, useEffect, useState} from "react";
import Navbar from "../Navbar";
import OptionsList from "./OptionsList";
import RestaurantName from "./RestaurantName";
import RestaurantDescription from "./RestaurantDescription";
import RestaurantPhoto from "./RestaurantPhoto";
import GoToMenuButton from "./GoToMenuButton";
import Ad from "./Ad";
import './RestaurantListStyle.css'
import {ConfigProvider, Input, Select, SelectProps} from 'antd';

let MOCK_RESTAURANTS = {
    "restaurants": [
        {
            "name": "Tasty Bites",
            "description": "A fusion of flavors that will tantalize your taste buds.",
            "pictureLink": "https://linkhotel.com.sg/wp-content/uploads/sites/183/2021/03/6.jpg",
            "tags":["vegetarian","burger"]
        },
        {
            "name": "Sizzling Grill",
            "description": "Grilled perfection for meat lovers.",
            "pictureLink": "https://image.architonic.com/imgArc/project-1/4/5210463/janua-reference-napagrill-zuerich-thoeny-02.jpg",
            "filters":["burger"]

        },
        {
            "name": "Vegetarian Delight",
            "description": "Fresh and delicious vegetarian options for a healthy feast.",
            "pictureLink": "https://images.adsttc.com/media/images/5ab9/3634/f197/cc6e/5400/00b7/slideshow/0376.jpg?1522087455",
            "tags":["vegetarian"]

        },
        {
            "name": "Seafood Paradise",
            "description": "Dive into the ocean of flavors with our exquisite seafood dishes.",
            "pictureLink": "https://www.qantas.com/content/travelinsider/en/lifestyle/people/neil-perrys-favourite-seafood-restaurants/_jcr_content/parsysTop/hero.img.full.medium.jpg/1532411911701.jpg",
            "filters    ":["vegetarian","burger"]

        },


    ]
}


function RestaurantList()
{
    const [availableRestaurant,setAvailableRestaurants] = useState([]);
    useEffect(() => {
        // Replace 'yourApiEndpoint' with the actual API endpoint
        fetch('http://localhost:8080/Restaurant/getAll')
            .then(response => response.json())
            .then(data => {setAvailableRestaurants(data);setModAvailableRestaurant(data);})
            .catch(error => console.error(error));
    }, []);

    const [modAvailableRestaurant,setModAvailableRestaurant] = useState(availableRestaurant);


    const [selectedRestaurant, setSelectedRestaurant] =useState(null)
    const [searchBarText,setSeachBarText] = useState('');
    const [selectedFilters, setSelectedFilters]= useState([]);

    const filterBarStyle=
        {
            top:'112px',
            left:'102px',
            position:'absolute',
            width:'636px',
            height:'56px',
            fontFamily:'Poppins',
        }
    const searchBarStyle =
        {
            borderRadius:'0',
            top:'190px',
            left:'102px',
            position:'absolute',
            width:'636px',
            height:'56px',
            fontFamily:'Poppins'

        }

    useEffect(()=>
    {
        let current_restaurants_filter=availableRestaurant;
        if (selectedFilters.length > 0) {
                current_restaurants_filter= current_restaurants_filter.filter(item =>
                item.tags.some(tag => selectedFilters.includes(tag))
            );
        }
        let current_restaurants_search=current_restaurants_filter;
        {/*current restaurant search modification*/}
        current_restaurants_search=current_restaurants_search.filter(item=>item.name_restaurant.toLowerCase().includes(searchBarText.toLowerCase()));
        setModAvailableRestaurant(current_restaurants_search);



    },[searchBarText,selectedFilters])
    function handleSelectedRestaurant(item)
    {
        setSelectedRestaurant(item)
    }


    function handleSearchBar(event)
    {
      setSeachBarText(event.currentTarget.value);
    }



    return (<Fragment>

        <Navbar></Navbar>
        <ConfigProvider
            theme={{
                components: {Select:{
                    colorPrimaryHover:'#585858',
                    colorTextPlaceholder:'WHITE',
                    colorBgBase:'BLACK',
                        colorText:'WHITE',
                        colorBgContainer:'BLACK',
                        colorBgElevated:'BLACK',
                        optionSelectedBg:'#e7810a',
                        optionSelectedColor:'BLACK',
                        multipleItemBg:'#e7810a',
                        colorBgTextActive:'#e7810a',
                        colorBorder:'#585858',
                        borderRadius:'0px'




                    },
                    Input:{hoverBorderColor:'#585858',colorBorder:'#585858',activeBorderColor:'#585858',borderRadius:'0px',colorTextPlaceholder:'WHITE',colorBgContainer:'BLACK',colorText:'WHITE',colorPrimaryHover:'WHITE',colorBgTextActive:'#e7810a'}
                },


            }}>
            <div className='filterBarOuterBorder'></div>
            <Select size='large' value={selectedFilters} style={filterBarStyle}  placeholder='Filter Options' mode="multiple" options={[{label:'burger',value:'burger'},{label:'vegetarian',value:'vegetarian'}]} onChange={setSelectedFilters}></Select>
            <div className='searchBarOuterBorder'></div>
            <Input size='large' style={searchBarStyle} placeholder='Search' onChange={handleSearchBar}></Input>
            </ConfigProvider>


        <OptionsList  list={modAvailableRestaurant} onItemSelected={handleSelectedRestaurant}></OptionsList>
            {
            selectedRestaurant!=null &&
            (<Fragment>
                    {/*restaurant name modification*/}
            <RestaurantName name={selectedRestaurant.name_restaurant}></RestaurantName>
            <RestaurantDescription description={selectedRestaurant.description}></RestaurantDescription>
                    {/*restaurant picture link modification*/}
            <RestaurantPhoto photo={selectedRestaurant.picturelink}></RestaurantPhoto>
            <GoToMenuButton></GoToMenuButton>
            <Ad></Ad>
            </Fragment>
            )
            }


            </Fragment>)

}

export default RestaurantList;
