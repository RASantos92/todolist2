import React, {useContext} from 'react';
import BoxContext from '../contexts/BoxContext'

const BoxForm = props =>{
    const {color,setColor,setBox} = useContext(BoxContext)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setBox(banana => [...banana,color]);
        setColor("");
    }
    return (
        <form className="col-5 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="color">Color</label>
                <input type="text"  className="form-control" onChange={(e) => setColor(e.target.value)}/>
            </div>
            <input type="submit" value="Add Box" className="btn btn-warning btn-outline-primary"/>
        </form>
    )
}

export default BoxForm;