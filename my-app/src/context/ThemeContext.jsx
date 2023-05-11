import React from "react";

const ThemeContext = React.createContext();
ThemeContext.displayName = 'Theme-Context';

function App2(props) {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

const styles = {
    dark : {
        background: "gray",
        color: "white"
    },
    light: {
        background: "white",
        color: "black"
    }
}

function ThemedButton(props) {
    return(
        <ThemeContext.Consumer>
            {value => <button style={value === 'dark' ? styles.dark : styles.light}>Button</button>}
        </ThemeContext.Consumer>
    )
}

export default ThemeContext;