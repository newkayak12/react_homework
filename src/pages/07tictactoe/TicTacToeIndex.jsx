import {FormComponent} from "./component/FormComponent";
import {HeaderComponent} from "../../layout/HeaderComponent";
import {TableComponent} from "./component/TableComponent";
import {useSelector} from "react-redux";
import {GAME_STATE} from "../../reducer/tictactoeReducer";

const {WAIT,NOW_PLAYING,WIN,LOSE} = GAME_STATE

export const TicTacToeIndex = () => {
    const {state} = useSelector((state) => state.tictactoe)
    return (
        <>
            <HeaderComponent title="틱택토"/>
            <div style={{padding:'1rem'}}>
                <FormComponent/>
                {
                    (state===NOW_PLAYING)&&
                    <TableComponent/>
                }
            </div>
        </>
    )
}