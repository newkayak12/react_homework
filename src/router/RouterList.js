import {Index} from "../pages/Index";
import {GuGuDan} from "../pages/01guguDan/GuGuDan";
import {FindWord} from "../pages/02findWord/FindWord";
import {TrafficLight} from "../pages/03trafficLight/TrafficLight";
import {EndTalk} from "../pages/04endTalk/EndTalk";
import {NumberBaseBall} from "../pages/05numberBaseBall/NumberBaseBall";
import {Lottery} from "../pages/06lottery/Lottery";
import {TicTacToeIndex} from "../pages/07tictactoe/TicTacToeIndex";



export default [
    {
        path:'/', component: <Index/>
    },
    {
        path: '/gugudan', component: <GuGuDan/>
    },
    {
        path: '/findword', component: <FindWord/>
    },
    {
        path: '/trafficLight', component: <TrafficLight/>
    },
    {
        path: '/endTalk', component: <EndTalk/>
    },
    {
        path: '/numberBaseBall', component: <NumberBaseBall/>
    },
    {
        path:'/lottery', component: <Lottery/>
    },
    {
        path:'/tictactoe', component: <TicTacToeIndex/>
    }
]