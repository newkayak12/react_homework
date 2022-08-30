import {HeaderComponent} from "../../layout/HeaderComponent";
import {useState, useRef, useEffect} from "react";

const RESULT = {
   WAIT:99,GAME:0,WIN:1,LOSE:-1
}

export const EndTalk = () => {
    const [word, setWord] = useState('')
    const [solve, setSolve] = useState('')
    const [turn, setTurn] = useState('')
    const [result, setResult] = useState(null)
    const inputRef = useRef(null)
    const btnRef = useRef(null)

    useEffect(() => {
        if(result === RESULT.WAIT){
            const startWord =  ['고양이', '강아지', '휴대폰', '물병', '기린']
            setWord(startWord[Math.floor(Math.random()*startWord.length)])
            setResult(RESULT.GAME)
            setTurn('user')
        }
        if(inputRef.current!==null){
            inputRef.current.focus()
        }
    }, [result]);

    const start = () => {
        setSolve('')
        setResult(RESULT.WAIT)
    }
    const inputWord = ($event) => {
        const solution = $event.target.value
        setSolve(solution)
    }
    const solutions = () => {
        if(word[word.length-1] === solve[0] ){
            setTurn((prevState)=>{
                return prevState==='computer'?'user':'computer'
            })
            setTimeout(()=>{
                setWord(solve[solve.length-1]+'가')
                setTurn((prevState)=>{
                    return prevState==='computer'?'user':'computer'
                })
                setSolve('')
                inputRef.current.focus()
            },2000)
            return
        }
        setResult(LOSE)
    }
    const keyUpEvent = ($event) => {
        if($event.keyCode === 13){
            btnRef.current.click()
        }
    }



    const {WIN, LOSE, GAME} = RESULT
    return (
        <>
            <HeaderComponent title="끝말잇기"/>
            <div style={{padding:'1rem 1rem'}}>
                <h1>{word}</h1>
            </div>
            <div style={{padding:'1rem 1rem'}}>
                {
                    ((result===WIN)||(result===LOSE))&&<h1>
                        {
                            ((result===WIN)&&'승리'||
                            (result===LOSE)&&'패배')
                        }
                    </h1>
                }
                {
                    (result === null || result === WIN || result === LOSE)
                    && <button onClick={start}>
                        {result === null && '시작하기'}
                        {(result === WIN || result === LOSE) && '다시 시작하기'}
                    </button>
                }
                {
                    (result === GAME) &&
                    <>
                        {turn!==''&&<p>{turn}의 턴</p>}
                        <input type="text" disabled={turn==='computer'} value={solve} onKeyUp={keyUpEvent} onInput={inputWord} ref={inputRef} />
                        <button style={{marginLeft:'0.2rem'}} onClick={solutions} ref={btnRef}> 입력 </button>
                    </>
                }
            </div>
        </>
    )
}