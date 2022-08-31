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
        setState: (state, action) => {
            state.state = action.payload
        },
        setTable: (state, action) => {
            state.table = action.payload
        },
        setTurn: (state, action) => {
            state.turn = action.payload
        },
        setWiiner: (state, action) =>{
            state.winner = action.payload
        }
    }
})

export const { setState } = tictactoeReducer.actions
export default tictactoeReducer.reducer