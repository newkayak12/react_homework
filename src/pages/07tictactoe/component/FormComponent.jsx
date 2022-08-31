import { useSelector, useDispatch} from "react-redux";
import {GAME_STATE, setState} from "../../../reducer/tictactoeReducer";
import {memo} from "react";

const {WAIT,NOW_PLAYING,WIN,LOSE} = GAME_STATE
export const FormComponent = memo(() => {
    const {state,turn} = useSelector((state) => state.tictactoe)
    const dispatch = useDispatch()

    const startGame = () => {
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