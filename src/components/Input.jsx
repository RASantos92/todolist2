import React, {useState} from 'react';

const Input = (props) =>{
    const {list,setList} = props;
    
    const [task,setTask] = useState ({
        name: "",
        isComplete: false
    });

    const onChange = e => {
        setTask({
            ...task,
            name: e.target.value
        })
    }
    const onClick = e =>{
        setList([...list, task]);
        setTask({
            ...task,
            name: ""
        })
    }

    return(
        <div className="container w-50 mt-3">
            <input className="form-control" onChange={onChange} type="text" name="task" value={task.name}/>
            <button className="btn btn-primary btn-block" onClick={onClick}>Add Task</button>
        </div>
    )
}

export default Input;