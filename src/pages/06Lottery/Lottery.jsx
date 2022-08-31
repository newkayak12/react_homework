import {createContext, useState} from "react";
import {HeaderComponent} from "../../layout/HeaderComponent";
import {LotteryBall} from "./LotteryBall";

export const BallContext = createContext({
    ballArray : []
})


export const Lottery = () => {
    const [ballArray, setBallArray] = useState([])
    const setLotteryBall = () => {
        setBallArray([])
        const set = new Set();
        while(set.size<6){
            set.add(Math.floor((Math.random()*45)+1))
        }
        const array = Array.from(set)
        array.forEach((v,i)=>{
            setTimeout(()=>{
                setBallArray((prevState)=>[...prevState, v])
            },1000*(i+1))
        })
    }

    return (
        <>
            <HeaderComponent title="복권 뽑기"/>
            <div>
                <BallContext.Provider style={{padding:'1rem', marginBottom:'1rem'}} value={{ballArray}}>
                    <LotteryBall />
                </BallContext.Provider>
                <div style={{padding:"1rem"}}>
                    <button type="button" onClick={setLotteryBall}>
                        {ballArray.length === 0? "뽑기":"다시 뽑기"}
                    </button>
                </div>
            </div>
        </>
    )
}