import { useState } from "react";
import FancyBorder from "./FancyBorder";

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1>
                {props.title}
            </h1>
            <p>
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}

function WelcomeDialog2(props) {
    return (
        <Dialog
        tilte="어서 오세요"
        message="사이트에 방문하신 것을 환영"
        />
    );
}

function SignUpDialog(props) {
    const [nickname, setNickname] = useState('');

    const handleChange = (event) => {
        setNickname(event.target.value);
    }

    const handleSignUp = () => {
        alert(`어서 오세요, ${nickname}님!`);
    }

    return (
        <Dialog
        title="화성 탐사 프로그램"
        message="닉네임을 입력해 주세요.">
            <input
            value={nickname}
            onChange={handleChange} />
            <button onClick={handleSignUp}>
                가입하기
            </button>
        </Dialog>
    )
}
export default SignUpDialog;