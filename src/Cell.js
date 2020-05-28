import React from "react"
import { Cross } from "./Cross"
import PropTypes from "prop-types"
import "./Cell.css"

export const Cell = ({ text, index, crossed, crossDispatch }) => {
    return (
        <div className="cell" onClick={() => crossDispatch(index)}>
            <div className="text">
                <Cross style={{ display: crossed ? "inline-block" : "none" }} />
            </div>
            {text}
        </div>
    )
}

Cell.propTypes = {
    text: PropTypes.string,
    index: PropTypes.any,
    crossed: PropTypes.bool,
    crossDispatch: PropTypes.func,
}
