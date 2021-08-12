import React from "react"
import PropTypes from "prop-types"

//Componente funcional

const Button = ({ text, type, clickHandler }) => (
    <button className={type} onClick={() => clickHandler(text)}>
        <span>{text}</span>
    </button>
)

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    clickHandler: PropTypes.func.isRequired
}
export default Button;