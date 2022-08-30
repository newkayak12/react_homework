import {HeaderComponent} from "../../layout/HeaderComponent";
import {useState, useRef} from "react";

export const TrafficLight = () => {
    const [color, setColor] = useState('')
    const ref = useRef(null);
    const changeColor = (value = '') =>{
        if(ref.current){
            clearInterval(ref.current)
        }
        if(value !== 'auto'){
            setColor(value)
            return
        }
        ref.current = setInterval(()=>{
            console.log("red")
            setColor('red')
            setTimeout(()=>{
                console.log("yellow")
                setColor('yellow')
                setTimeout(()=>{
                    console.log("green")
                    setColor('green')
                },3000)
            },3000)
        }, 9000)

    }
    const coloring = (target) => {
        if(target === color){
            return color
        }
        return 'white'
    }
    return (
        <>
            <HeaderComponent title="신호등"/>
            <div style={{padding:'1rem', margin:'1rem 1rem', width:'300px', height:'100px',
                display:'flex', justifyContent:'space-around', border:'1px black solid', alignItems:'center'
            }}>
                <div style={{border:'1px black solid', borderRadius:'100%', width:'75px', height:'75px', backgroundColor:coloring('red')}}></div>
                <div style={{border:'1px black solid', borderRadius:'100%', width:'75px', height:'75px', backgroundColor:coloring('yellow')}}></div>
                <div style={{border:'1px black solid', borderRadius:'100%', width:'75px', height:'75px', backgroundColor:coloring('green')}}></div>
            </div>
            <div style={{padding:'1rem', width:'300px', margin:'1rem 1rem', display:'flex', justifyContent:'space-around'}}>
                <button onClick={()=>{changeColor('red')}}>빨간색</button>
                <button onClick={()=>{changeColor('yellow')}}>노란색</button>
                <button onClick={()=>{changeColor('green')}}>초록색</button>
                <button onClick={()=>{changeColor('auto')}}>자 동</button>
            </div>
        </>
    )
}