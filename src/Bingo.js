import React, { useReducer } from "react"
import PropTypes from "prop-types"
import "./Bingo.css"
import { Cell } from "./Cell"

export const Bingo = ({ phrases }) => {
    const lineLength = Math.sqrt(phrases.length)

    const [state, crossDispatch] = useReducer((state, { r, c }) => {
        const newCrossMatrix = [...state.crossMatrix]
        newCrossMatrix[r][c].checked = true
        return {
            ...state,
            crossMatrix: newCrossMatrix,
        }
    }, {
        crossMatrix: {},
        bingoCount: 0,
    }, () => {
        return {
            crossMatrix: phrases.reduce((acc, text, i) => {
                const currentLine = Math.trunc(i / lineLength)
                const cell = { text, checked: false }
                if (i % lineLength === 0) {
                    return acc.length ? [...acc, [cell]] : [[cell]]
                }
                acc[currentLine].push(cell)
                return acc
            }, [])
        }
    })

    return (
        <table className="bingo">
            <tbody>
                {state.crossMatrix.map((line, rowNum) => (
                    <tr key={rowNum}>
                        {line.map(({ text, checked }, colNum) => {
                            const cellIndex = { r: rowNum, c: colNum }
                            return (
                                <td key={`${colNum}-${text}`}>
                                    <Cell
                                        text={text}
                                        index={cellIndex}
                                        crossed={checked}
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