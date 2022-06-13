import * as React from "react"
import Chip from "./Chip/Chip"

export function RestaurantsRows(props) {
    const restaurants = props.restaurants
    return (
        <div className="RestaurantsRow">
            <h2 className="title">Restaurants</h2>
            <div className="restaurants options">
            {restaurants.map((restaurant) => (
            <Chip key={restaurant} label={restaurant} onClick={()=> props.setter(restaurant)} isActive={props.res === restaurant}/>
            ))}
            </div>
        </div>
    )
}

export default RestaurantsRows