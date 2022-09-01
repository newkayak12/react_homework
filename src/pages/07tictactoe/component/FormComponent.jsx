import { useSelector, useDispatch} from "react-redux";
import {GAME_STATE, setState, init} from "../../../reducer/tictactoeReducer";
import {memo} from "react";

const {WAIT,NOW_PLAYING,WIN,LOSE} = GAME_STATE
export const FormComponent = memo(() => {
    const {state,turn,winner} = useSelector((state) => state.tictactoe)
    const dispatch = useDispatch()

    const startGame = () => {
        dispatch(init())
        dispatch(setState(NOW_PLAYING))
    }
    return (
        <>
            {
                (state === WAIT &&
                    <div>
                        <button onClick={startGame}> 게임 시작 </button>
                    </div>
                ) ||
                ((state === WIN || state === LOSE)&&
                    <div>
                        <h1 style={{margin:'1rem 0rem',fontSize:'2rem'}}>{winner} 님의 승리!</h1>
                        <button onClick={startGame}> 다시 하기 </button>
                    </div>
                )||
                (state=== NOW_PLAYING) &&
                    <div style={{padding:'1rem'}}>
                        <p>{turn} 님의 턴</p>
                    </div>
            }
        </>
    )
})