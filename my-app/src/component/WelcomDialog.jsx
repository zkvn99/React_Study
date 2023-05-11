import FancyBorder from "./FancyBorder";
import Calculator from "../12/Calculator";

function WelcomeDialog(props) {
    return (
        <FancyBorder color="yellow">
            <h2>
                Calculator
            </h2>
            <Calculator />
        </FancyBorder>
    )
}

export default WelcomeDialog;