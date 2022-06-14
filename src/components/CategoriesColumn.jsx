import * as React from "react"
import Chip from "./Chip/Chip"

export function CategoriesColumn(props) {
    const [state, setState] = React.useState(true)
    return (
        <div className="CategoriesColumn col">
        <div className="categories options">
        <h2 className="title">Categories</h2>
        {props.categories.map((category) => (
            <Chip key={category} label={category} onClick={()=> props.setter(category)} reset={()=> setState(true)} close={()=> setState(false)} isActive={props.cat === category && state}/>
        ))}
        </div>
    </div>
    )
}

export default CategoriesColumn