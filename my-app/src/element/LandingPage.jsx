import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    }

    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Toolbar
            isLoggedIn={isLoggedIn}
            onClickLogin={onClickLogin}
            onClickLogout={onClickLogout}
            />
            <hr />
            <div style={{ padding: 10 }}>
                즐거운 리액트 공부!
            </div>
        </div>
    )
}

export default LandingPage;