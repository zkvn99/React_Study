import { useState } from 'react';
import styled from 'styled-components';
import { searchWeather } from './api';

const AppWrap = styled.div`
    width: 100vw;
    height: 100vh;
    
    .appContentWrap {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        padding: 20px;
    }
    input {
        padding: 16px;
        border: 2px black solid;
        border-radius: 16px;
    }
`;

const ResultWrap = styled.div`
    margin-top: 60px;
    border: 1px black solid;
    padding: 10px;
    border-radius: 8px;
    
    .city {
        font-size: 24px;
    }
    .temperature {
        font-size: 60px;
        margin-top: 8px;
    }
    .sky {
        font-size: 20px;
        text-align: right;
        margin-top: 8px;
    }
`;

function Weather() {
    const [location, setLocation] = useState('');
    const [result, setResult] = useState({});

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            const data = await searchWeather(location);
            setResult(data);
        }
    }

    return (
        <AppWrap>
            <div className='appContentWrap'>
                <input
                    placeholder='도시를 입력하세요'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    type="text"
                    onKeyDown={handleKeyDown}
                />
                {Object.keys(result).length !== 0 && (
                    <ResultWrap>
                        <div className='city'>{result.data.name}</div>
                        <div className='temperature'>
                            {Math.round(result.data.main.temp * 10) / 10}°C
                        </div>
                        <div className='sky'>{result.data.weather[0].main}</div>
                    </ResultWrap>
                )}
            </div>
        </AppWrap>
    )
}

export default Weather;