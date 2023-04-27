import React, { useRef } from "react";

function TextInputWithFocusButton(props) {
    const inputElem = useRef(null);

    const onButtonClick = () => {
        inputElem.current.focus();
    }

    return (
        <div>
            <input type = "text" />
            <input ref = {inputElem} type = "text" />
            <button onClick = {onButtonClick}> Focus the input </button>
        </div>
    )
}

export default TextInputWithFocusButton;