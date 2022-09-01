import {memo, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setState, setTable, setTurn, setWinner} from "../../../reducer/tictactoeReducer";
import {GAME_STATE} from "../../../reducer/tictactoeReducer";
const gameChecker = (newTable) =>{
    // 수직
    for (let i = 0; i <= 2; i += 1) {
        if (newTable[0][i] === newTable[1][i] && newTable[1][i] === newTable[2][i]
            && (newTable[0][i] !== '' && newTable[1][i] !== '' && newTable[2][i] !== '')) {
            return true;
        }
    }
    // 수평
    for (let i = 0; i <= 2; i += 1) {
        if (newTable[i][0] === newTable[i][1] && newTable[i][1] === newTable[i][2]
            && (newTable[i][0] !== '' && newTable[i][1] !== '' && newTable[i][2] !== '')) {
            return true;
        }
    }
    // 대각
    if ((newTable[0][0] === newTable[1][1] && newTable[1][1] === newTable[2][2]
            && (newTable[0][0] !== '' && newTable[1][1] !== '' && newTable[2][2] !== ''))
        || ((newTable[0][2] === newTable[1][1] && newTable[1][1] === newTable[2][0]
            && newTable[0][2] !== '' && newTable[1][1] !== '' && newTable[2][0] !== ''))) {
        return true;
    }
}
export const TdComponent = memo(({rowIdx, cellIdx}) => {
    const {turn, table} = useSelector((state)=>state.tictactoe)
    const dispatch = useDispatch()
    const check = () => {
        let newTable = JSON.parse(JSON.stringify(table))
        if(newTable[rowIdx][cellIdx]){
            return
        }

        newTable[rowIdx][cellIdx] = turn
        dispatch(setTable(newTable))

        if(gameChecker(newTable)){
            const {WIN,LOSE} = GAME_STATE
            dispatch(setState(turn==='O'?WIN:LOSE))
            dispatch(setWinner(turn))
            return
        }
        if(newTable.flat(1).filter(i=>!!i).length>=9){
            dispatch(setTable([['','',''],['','',''],['','','']]))
        }
        dispatch(setTurn(turn==='O'?'X':'O'))
    }
    return (
        <td onClick={check}>{table[rowIdx][cellIdx]}</td>
    )
})