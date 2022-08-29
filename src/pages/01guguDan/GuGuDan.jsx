import {useState} from "react";
import {HeaderComponent} from "../../layout/HeaderComponent";
export const GuGuDan = () => {
    const [ref1, setRef1] = useState(1)
    const array = new Array(9).fill(1).map((v,i)=> v+i)

    const mutatingRef1 = ($event) =>{
        setRef1($event.target.value)
    }
    return (
        <>
            <HeaderComponent title={"구구단"}/>
            <div style={{padding:'1rem'}}>
                <input type="text" value={ref1} onInput={mutatingRef1}/>
                <span style={{marginLeft:'5px'}}>단</span>

                {ref1&&array.map((v,i)=>{
                    return (
                        <p key={`${v}-${i}`} style={{fontSize:'24px', marginTop:'10px'}}>
                            {ref1}
                            <span style={{margin:'0 10px'}}>x</span>
                            {v}
                            <span style={{margin:'0 10px'}}>=</span>
                            {ref1 * v}
                        </p>
                    )
                })}
            </div>
        </>
    )
}