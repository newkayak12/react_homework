import {createSlice} from "@reduxjs/toolkit";
export const GAME_STATE = {
    WAIT:'WAIT',
    NOW_PLAYING:'NOW_PLAYING',
    WIN:'WIN',
    LOSE:'LOSE'
}
export const tictactoeReducer = createSlice({
    name:'tictactoeReducer',
    initialState:{
        winner:'',
        turn:'O',
        state:GAME_STATE.WAIT,
        table:[['','',''],['','',''],['','','']]
    },
    reducers: {
        init:(state)=>{
                state.winner = ''
                state.turn = 'O'
                state.state = GAME_STATE.WAIT
                state.table = [['','',''],['','',''],['','','']]
        },
        setState: (state, action) => {
            state.state = action.payload
        },
        setTable: (state, action) => {
            state.table = action.payload
        },
        setTurn: (state, action) => {
            state.turn = action.payload
        },
        setWinner: (state, action) =>{
            state.winner = action.payload
        }
    }
})

export const { init, setState, setTable, setTurn, setWinner } = tictactoeReducer.actions
export default tictactoeReducer.reducer