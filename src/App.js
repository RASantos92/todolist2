import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Input from './components/Input';
import Task from './components/Task';



function App(){
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <div className="App container" style={{width:"800px"}}>
      <Input list={list} setList={setList} />
      {list.map((task, i )=> (
        <Task task={task} setList={setList} list={list} index={i}/>
      ))}
      </div>
      </div>
  );
}

export default App;
