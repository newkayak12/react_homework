import {memo} from "react";

export const InputHistory = memo((props) => {
    const {out, ball, strike} = props.history

    return (
        <>
            <p>
                {out}
                <span style={{color:'red'}}>아웃</span>/
                {ball}
                <span style={{color:"orange"}}>볼</span>/
                {strike}<span style={{color:'yellowgreen'}}>스트라이크</span>
            </p>
        </>
    )
})