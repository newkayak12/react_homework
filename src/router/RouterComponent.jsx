import {Routes, Route} from 'react-router-dom'
import RouterList from "./RouterList";

export const RouterComponent = () => {
    return (
        <>
            <Routes>
                {RouterList.map(v=>{
                    return (
                        <Route path={v.path} element={v.component} key={v.path}/>
                    )
                })}
            </Routes>
        </>
    )
}