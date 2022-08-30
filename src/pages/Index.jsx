import {useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router";
import {logDOM} from "@testing-library/react";
export const Index = () => {
    const [ref1, setRef1] = useState(1)
    const [color, setColor] = useState('0, 0, 0')
    const navigate = useNavigate();
    // let color = useRef();
    useEffect(() => {
        console.log("EFECT")
        const timer = setInterval(()=>{
            const r = Math.floor(Math.random()*255)
            const g = Math.floor(Math.random()*255)
            const b = Math.floor(Math.random()*255)
            setColor(`${r}, ${g}, ${b}`)
            // color.current = (`${r}, ${g}, ${b}`)
        }, 10)
    }, []);



    return (
        <>
            <div style={{backgroundColor:"black", height:'100vh'}}>
                <div style={{display:'flex', justifyContent:"center"}}>
                    <pre style={{color:`rgb(${color})`}}>
                        {"    ____                  __       __  __                   _       __           __  \n" +
                            "   / __ \\___  ____ ______/ /_     / / / /___  ____ ___  ___| |     / /___  _____/ /__\n" +
                            "  / /_/ / _ \\/ __ `/ ___/ __/    / /_/ / __ \\/ __ `__ \\/ _ \\ | /| / / __ \\/ ___/ //_/\n" +
                            " / _, _/  __/ /_/ / /__/ /_     / __  / /_/ / / / / / /  __/ |/ |/ / /_/ / /  / ,<   \n" +
                            "/_/ |_|\\___/\\__,_/\\___/\\__/____/_/ /_/\\____/_/ /_/ /_/\\___/|__/|__/\\____/_/  /_/|_|  \n" +
                            "                         /_____/                                                     "}
                    </pre>
                </div>

                <ol style={{textAlign:"center", marginTop:'5rem', color:"white"}}>
                    <li onClick={()=>{navigate("/gugudan")}}> 1. 구구단</li>
                    <li onClick={()=>{navigate("/findword")}}> 2.가사 속 단어 찾기</li>
                    <li onClick={()=>{navigate("/trafficLight")}}> 3.신호등</li>
                    <li onClick={()=>{navigate("/endTalk")}}> 4.끝말잇기</li>
                    <li onClick={()=>{navigate("/")}}> 5.숫자야구</li>
                    <li onClick={()=>{navigate("/")}}> 6.로또추첨</li>
                    <li onClick={()=>{navigate("/")}}> 7.틱택토</li>
                </ol>
            </div>
        </>
    )
}