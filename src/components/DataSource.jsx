import * as React from "react"

export function DataSource(props) {
    return (
        <div className="data-sources">
            <p>{props.data.dataSource}</p>
        </div>
    )
}

export default DataSource