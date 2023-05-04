import BoilingVerdict from "./BoilingVerdict";
import TemparatureInput from "./TemparatureInput"
import React, {useState} from "react";


function Calculator(props) {
    /*const [temparature, setTemparature] = useState('');

    const handleChange = (event) => {
        setTemparature(event.target.value);
    }

    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요.</legend>
            <input
            value={temparature}
            onChange={handleChange} />
            <BoilingVerdict
            celsius={temparature} />
        </fieldset>
    )*/
    const [temparature, setTemparature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temparature) => {
        setTemparature(temparature)
        setScale('c');
    }

    const handleFahrenheitChange = (temparature) => {
        setTemparature(temparature);
        setScale('f');
    }

    const celsius = scale === 'f' ?
        tryConvert(temparature, toCelius) : temparature;
    const fahrenheit = scale === 'c' ?
        tryConvert(temparature, toFahrenheit) : temparature;
    return (
        <div>
            <TemparatureInput 
            scale="c"
            temparature={celsius}
            onTemparatureChange={handleCelsiusChange} />
            <TemparatureInput 
            scale="f"
            temparature={fahrenheit}
            onTemparatureChange={handleFahrenheitChange} />
            <BoilingVerdict
            celsius={parseFloat(celsius)} />
        </div>
    )
}

function toCelius(fahreentheit) {
    return (fahreentheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temparature, convert) {
    const input = parseFloat(temparature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


export default Calculator;