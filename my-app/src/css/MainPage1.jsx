import styled from 'styled-components';

const Wrapper = styled.div`
padding: 1em;
background: grey;
`;

const Title = styled.h1`
font-size: 1.5em;
color: white;
text-align: center;
`;

function MainPage1(props) {
    return(
        <Wrapper>
            <Title>안녕, 리액트</Title>
        </Wrapper>
    );
}

export default MainPage1;