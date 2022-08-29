import {memo} from "react";
import {useNavigate} from "react-router";
export const HeaderComponent = memo((props) => {
    const navigate = useNavigate()
    return (
        <>
            <div className='header-container'>
                <h2 className='back' onClick={()=>{navigate("/")}}>&lt;</h2>
                <h2 className='title'>{props.title}</h2>
            </div>
        </>
    )
})

