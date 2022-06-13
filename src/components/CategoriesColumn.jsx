import * as React from "react"
import Chip from "./Chip/Chip"

export function CategoriesColumn(props) {
    const categories = props.categories
    return (
        <div className="CategoriesColumn col">
        <div className="categories options">
        <h2 className="title">Categories</h2>
        {categories.map((category) => (
            <Chip key={category} label={category} onClick={()=> props.setter(category)} isActive={props.cat === category}/>
        ))}
        </div>
    </div>
    )
}

export default CategoriesColumn