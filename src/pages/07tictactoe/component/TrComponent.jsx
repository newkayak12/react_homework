import {TdComponent} from "./TdComponent";
import {memo, useMemo} from "react";
export const TrComponent = memo(({rowIdx}) => {
    const temporaryTable = new Array(3).fill('')
    return (
        <tr>
            {temporaryTable.map((v,i)=><TdComponent cellIdx={i} rowIdx={rowIdx} key={`${rowIdx}-${i}`} />)}
        </tr>

    )
})