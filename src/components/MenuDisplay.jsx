import * as React from "react"
import Chip from "/src/components/Chip/Chip"
import NutritionalLabel from "/src/components/NutritionalLabel/NutritionalLabel"

export function MenuDisplay(props) {
    return (
        <div className="MenuDisplay display">
        <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {
                props.item.map((item) => (
                <Chip key={item.item_name} label={item.item_name} onClick={() => props.setter(item)}
                isActive={props.clickedItem && props.clickedItem.item_name === item.item_name}/>
                ))
            }
            </div>

            {/* NUTRITION FACTS */}
            <div className="NutritionFacts nutrition-facts">
            {props.clickedItem ? <NutritionalLabel item={props.clickedItem}/> : null}
            </div>
        </div>
    )
}

export default MenuDisplay