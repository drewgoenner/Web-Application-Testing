import React, { useState } from 'react';
import Display from './Display'

export const callBall = currentBalls => {
    if(currentBalls < 3) {
        return currentBalls +1
    } else { return currentBalls = 0}
}

export const callStrike = currentStrikes => {
    if(currentStrikes < 2) {
        return currentStrikes + 1
    } else {return currentStrikes = 0}
}

export const callHit = currentHits => {
    return currentHits + 1
}

export const callFoul = currentStrikes => {
    if( currentStrikes < 2) {
        return currentStrikes +1
    } else {return currentStrikes = 2}
}


const Dashboard = () => {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);
    const [hits, setHits] = useState(0);
    const [fouls, setFouls] =useState(0);

    return(
        <div>
            <Display strikes={strikes} 
                    balls={balls}
                    hits={hits}
                    fouls={fouls}
                     />


            <h1>Baseball Fun Game Dashboard</h1>
            <button onClick = {() => setBalls(callBall(balls))}>Ball</button>
            <button onClick = {() => setStrikes(callStrike(strikes))}>Steeeerike!</button>
            <button onClick = {() => setHits(callHit(hits))}>Hit</button>
            <button onClick = {() => setStrikes(callFoul(strikes))}>Foul</button>
        </div>
    )
}

export default Dashboard;