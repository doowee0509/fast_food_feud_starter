import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false }) {
  const [category, setCategory] = React.useState("")
  isActive = category === label ? true : false
  var buttonClassName = isActive ? 'chip active' : 'chip'
  return (
    <button className={buttonClassName} onClick={() => {
      setCategory(label)
    }
    }>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
