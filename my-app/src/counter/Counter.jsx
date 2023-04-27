import React, { useState, useEffect } from "react";

function Counter(props){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`;
    }, [count]);

    useEffect(() => {
        return () => {
            console.log(`useEffect unmount 호출됨. 최종 count: ${count}`);
        }
    }, []);
    return (
        <div>
            <p> 총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}

export default Counter;