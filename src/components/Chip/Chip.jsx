import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick, close, reset}) {
  var buttonClassName = isActive ? 'chip active' : 'chip'
  return (
    <button className={buttonClassName} onClick={onClick}>
      <p className="label" onClick={reset}>{label}</p>
      <span className="close" role="button" onClick={close}>{`X`}</span>
    </button>
  )
}

export default Chip
