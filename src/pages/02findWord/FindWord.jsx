import lyrics from './lyrics.json'
import {HeaderComponent} from "../../layout/HeaderComponent";
import {useMemo, useState} from "react";

export const FindWord = () => {
    const [ref1, setRef1] = useState('')
    const [ref2, setRef2] = useState(0)



    const countAndColoring = (text = '') => {
        if(!!ref1){
            setRef2(text.split(" ").filter(v=>v.includes(ref1)).length)
            return text.replaceAll(ref1, `<span style="color:red">${ref1}</span>`)
        }
        return text
    }
    const lyric = useMemo(()=>{
        return countAndColoring(lyrics.lyrics)
    }, [ref1])
    const onInputRef1 = ($event) => {
        setRef1($event.target.value)
    }

    return (
        <>
            <HeaderComponent title="노래 가사 속 단어 찾기"/>
            <div style={{padding:'1rem', display:'flex', alignItems:'center'}}>
                <input type="text" value={ref1} onInput={onInputRef1}/>
                {!!ref2 && <p style={{marginLeft:'0.2rem'}}>{ref2} 건</p>}
            </div>
            <div>
                <pre style={{padding:'1rem'}} dangerouslySetInnerHTML={{__html: lyric}}>
                </pre>
            </div>
        </>
    )
}