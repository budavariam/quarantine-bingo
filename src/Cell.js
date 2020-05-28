import React, { useState } from "react"
import { Cross } from "./Cross"
import "./Cell.css"

export const Cell = ({ text }) => {
    const [crossed, setCrossed] = useState(false)
    return (
        <div className="cell" onClick={() => setCrossed(true)}>
            <div className="text">
                <Cross style={{ display: crossed ? "inline-block" : "none" }} />
            </div>
            {text}
        </div>
    )
}
