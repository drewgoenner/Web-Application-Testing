import React from 'react';
import styled from 'styled-components';

const CountDiv = styled.div`
display: flex;
justify-content: space-around;


`;

const Count =styled.div`
width: 100px;
height: 200px;
display: flex;
flex-direction: column;
border: 1px solid black;
`;

const CountHeader = styled.div`
border: 1px solid black;
background: lightgray;
font-size: 20px;
`;

const CountPar = styled.p`
font-size: 40px;

`;


const Display = (props) => {

    return(
        <CountDiv>
            <Count>
                <CountHeader>Strikes</CountHeader>
                <CountPar>{props.strikes}</CountPar>
            </Count>
            <Count>
                <CountHeader>Balls</CountHeader>
                <CountPar>{props.balls}</CountPar>
            </Count>
        </CountDiv>
    );
}

export default Display;