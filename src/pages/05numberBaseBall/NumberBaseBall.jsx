import {HeaderComponent} from "../../layout/HeaderComponent";
import {useState, useRef, useEffect} from "react";
import {InputHistory} from "./InputHistory";

const STATUS = {
    GAME:'game', WIN:"win", LOSE:'lose'
}
export const NumberBaseBall = () => {
    const {GAME, WIN, LOSE} = STATUS
    const [solution, setSolution] = useState([])
    const [input, setInput] = useState('')
    const [division, setDivision] = useState([])
    const [status, setStatus] = useState(GAME)

    useEffect(()=>{
        if(status === GAME){
            const elements = new Set()
            while(elements.size<4){
                elements.add(Math.floor(Math.random()*10))
            }
            setSolution(Array.from(elements))
        }
    },[status])
    const inputValue = ($event) => {
        setInput($event.target.value)
    }
    const solve =  () =>{
        let out = 4;
        let ball = 0;
        let strike = 0;
        const inputArr = input.split('').map(i=>Number(i))

        inputArr.forEach((iptV, iptI)=>{
            solution.forEach((solV, solI)=>{
                if(iptI === solI && iptV === solV){
                    strike +=1
                    return
                }
                if(iptI !== solI && iptV === solV){
                    ball +=1;
                    return
                }
            })
        })
        out -= (ball+strike)

        if(strike === 4){
            setStatus(WIN)
            return
        }
        if(division.length + 1 >= 9){
            setStatus(LOSE)
            return
        }
        setDivision((prevState)=>[...prevState, {out:out, ball:ball, strike:strike}])



    }
    const retry = () => {
        setInput('')
        setDivision([])
        setStatus(GAME)
    }

    return (
        <>
            <HeaderComponent title="숫자야구"/>
            {status===GAME &&
                <>
                    <div style={{padding: '0.5rem 0.5rem'}}>
                        <h1>{solution}</h1>

                        <h2>{division.length + 1}회</h2>
                        <input type="text" value={input} onInput={inputValue}/>
                        <button onClick={solve}>Enter!</button>
                    </div>
                    <div>
                        {division.map((v, i) => {
                            return (<InputHistory history={v} key={i}/>)
                        })}
                    </div>
                </>
            }
            {
                (status===WIN||status===LOSE)&&
                <div style={{padding:'1rem'}}>
                    {
                        ((status === WIN &&<p style={{marginBottom:'1rem'}}>승리!</p>) ||
                        (status === LOSE &&<p style={{marginBottom:'1rem'}}>패배!</p>))
                    }
                    <button onClick={retry}>다시하기</button>
                </div>
            }
        </>
    )
}