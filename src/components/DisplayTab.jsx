import React from 'react'


const DisplayTab = (props) => {
    const {tab} = props
    return(
        <div style={tab.isSelected ?{height:"300px", width:"300px", border:"2px solid black"}:{display:"none"}}>
            <p>{tab.message}</p>
        </div>
    )
}
export default DisplayTab;