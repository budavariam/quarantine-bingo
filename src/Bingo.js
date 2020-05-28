import React, { useReducer } from "react"
import PropTypes from "prop-types"
import "./Bingo.css"
import { Cell } from "./Cell"

export const Bingo = ({ phrases }) => {
    const lineLength = Math.sqrt(phrases.length)
    const lines = phrases.reduce((acc, curr, i) => {
        const currentLine = Math.trunc(i / lineLength)
        if (i % lineLength === 0) {
            return acc.length ? [...acc, [curr]] : [[curr]]
        }
        acc[currentLine].push(curr)
        return acc
    }, [])

    const [crossedState, crossDispatch] = useReducer((state, action) => {
        const newCrossMatrix = {...state.crossMatrix}
        newCrossMatrix[action] = true
        console.log(state, action, newCrossMatrix)
        return {
            ...state,
            crossMatrix: newCrossMatrix,
        }
    }, {
        crossMatrix: {},
        bingoCount: 0,
    })

    return (
        <table className="bingo">
            <tbody>
                {lines.map((line, rowNum) => (
                    <tr key={rowNum}>
                        {line.map((text, colNum) => {
                            const cellIndex = `${rowNum}-${colNum}`
                            console.log(cellIndex, crossedState.crossMatrix, crossedState.crossMatrix[cellIndex])
                            return (
                                <td key={`${colNum}-${text}`}>
                                    <Cell
                                        text={text}
                                        index={cellIndex}
                                        crossed={crossedState.crossMatrix[cellIndex]}
                                        crossDispatch={crossDispatch}
                                    />
                                </td>)
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

Bingo.propTypes = {
    phrases: PropTypes.arrayOf(PropTypes.string)
}