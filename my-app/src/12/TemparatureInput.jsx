import React, {useState} from "react";

const scaleNames = {
    c: '섭씨',
    f: '화씨'
};

function TemparatureInput(props) {
    //const [temparature, setTemparature] = useState('');

    const handleChange = (event) => {
       // setTemparature(event.target.value);
       props.onTemparatureChange(event.target.value);
    }

    return (
        <fieldset>
            <legend>온도를 입력해 주세용(단위:{scaleNames[props.scale]})</legend>
            {/*<input value={temparature} onChange={handleChange} />*/}
            <input value={props.temparature} onChange={handleChange} />
        </fieldset>
    )
}

export default TemparatureInput;