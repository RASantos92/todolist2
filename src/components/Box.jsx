import React, {useContext} from 'react';
import BoxContext from '../contexts/BoxContext'

const Box = Props =>{
    const {box} = useContext(BoxContext);
    return(
        <div>
            {
                box.map((b,i)=>{
                    return <div style={{backgroundColor:b, width:"200px", height:"200px",border:"2px solid black"}}></div>
                })
            }
        </div>
    )
}

export default Box;