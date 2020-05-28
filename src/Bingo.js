import React from "react"
import PropTypes from "prop-types"
import "./Bingo.css"

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
    return (
        <table className="bingo">
            {lines.map(line => (
                <tr>
                    {line.map(text => (
                        <td>{text}</td>
                    ))}
                </tr>
            ))}
        </table>
    )
}

Bingo.propTypes = {
    phrases: PropTypes.arrayOf(PropTypes.string)
}