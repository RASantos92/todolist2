import React from 'react';

const Tabs = props =>{
    const {tab,idx,onClickHandler} = props;
    return(
    <div onClick={ (e) => onClickHandler(e, idx) } style={tab.isSelected ?{backgroundColor:"black",color:"white"}:{backgroundColor:"white", color:"black"}}class="btn-group" role="group" aria-label="Basic example">
        tab{idx+1}
    </div>
    )
}

export default Tabs;