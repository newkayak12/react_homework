import {Routes, Route} from 'react-router-dom'
import {Index} from "../pages/Index";
import {GuGuDan} from "../pages/01guguDan/GuGuDan";

export const RouterComponent = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/gugudan" element={<GuGuDan/>} />
            </Routes>
        </>
    )
}