import React from 'react';

const Task = (props) => {
    const {task, setList, index, list} = props;
    const onClick = () =>{
        return setList(()=> list.filter(task => list.indexOf(task) !== index));
    }

    const onChange = e =>{
        let update = [...list];
        update[index].isComplete = !update[index].isComplete;
        setList(update);
    }
    return (
        <div className="container bg-success">
            <h4 style={task.isComplete ?{textDecoration: "line-through"}:{textDecoration: "none"}}>{task.name}</h4>
            <div className="container">
                <label htmlFor="checkbox">Completed?</label>
                <input 
                onChange={onChange} 
                type="checkbox" 
                checked={task.isComplete} 
                />
                <button  className="btn btn-sm btn-danger"onClick={onClick}>X</button>
            </div>
        </div>
    )
}

export default Task;