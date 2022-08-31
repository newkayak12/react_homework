import {memo, useContext} from "react";
import {BallContext} from "./Lottery";
import  './lotteryStyle.css'
export const LotteryBall = memo(() => {
    const { ballArray } = useContext(BallContext);
    const lotteryBallColor = (v)=>{
        if(v>40){
            return 'red'
        }
        if(v>35){
            return 'orange'
        }
        if(v>30){
            return 'yellow'
        }
        if(v>25){
            return 'green'
        }
        if(v>20){
            return 'blue'
        }
        if(v>15){
            return 'navy'
        }
        if(v>10){
            return 'purple'
        }
        if(v>5){
            return 'black'
        }
        if(v>1){
            return 'gray'
        }
    }
    return (
        <>
            <div style={{display:'flex', justifyContent:'space-around', width:'500px', marginTop:'1rem'}}>
                {
                    ballArray.map((v,i)=>
                        <div style={lotteryBallStyle} className={lotteryBallColor(v)} key={`${v}-${i}`}>{v}</div>)
                }
            </div>
        </>

    )
})

const lotteryBallStyle = {
    border: '1px gray solid', borderRadius: '100%', padding:'0 0 auto',
    display:"flex", justifyContent:'center', alignItems:'center',
    width:'45px', height:'45px'
}