import {memo} from "react";
import {TrComponent} from "./TrComponent";
export const TableComponent = memo(() => {
    const temporaryTable = new Array(3).fill('')
    return (
        <table>
            <tbody>
                {temporaryTable.map((v,i)=><TrComponent rowIdx={i} key={i} />)}
            </tbody>
        </table>
    )
})