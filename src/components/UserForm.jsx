import React from  'react';
    
    
const UserForm = (props) =>{
    const { inputs, setInputs} = props;
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        })
    }

    const nameValid = (name) => {
        if( name.length <=2 && name.length !==0 ){
            return false;
        }
        return true;
    }

    const emailValid = (email) => {
        if( email.length <=5 && email.length !==0 ){
            return false;
        }
        return true;
    }

    const passwordValid = (password) => {
        if( password.length <=8 && password.length !==0 ){
            return false;
        }
        return true;
    }

    const passwordMatch = (password) => {
        if( password !== setInputs.confirmPassword && inputs.confirmPassword.length !==0 ){
            return false;
        }
        return true;
    }

    return(
        <form>
            <label htmlFor="firstName">First Name: </label>
            <input onChange={onChange} type="text" name="firstName"/>
            {nameValid(inputs.firstName) ? "": <p>first name need to be more than 2 characters</p>}<br/>
            <label htmlFor="lastName">Last Name: </label>
            <input onChange={onChange} type="text" name="lastName"/>
            {nameValid(inputs.lastName) ? "": <p>last name need to be more than 2 characters</p>}<br/>
            <label htmlFor="age">Age: </label>
            <input onChange={onChange} type="Number" name="age"/>
            <br/>
            <label htmlFor="hair">Hair Color: </label>
            <input onChange={onChange} type="text" name="hair"/>
            <br/>
            <label htmlFor="email">Email: </label>
            <input onChange={onChange} type="text" name="email"/>
            {emailValid(inputs.email) ? "": <p>email need to be more than 5 characters</p>}<br/>
            <label htmlFor="password">Password: </label>
            <input onChange={onChange} type="password" name="password"/>
            {passwordValid(inputs.password) ? "": <p>password need to be more than 8 characters</p>}<br/>
            {passwordMatch(inputs.password) ? "": <p>passwords dont match</p>}<br/>
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input onChange={onChange} type="password" name="confirmPassword"/>
            <br/>
        </form>
    )
}
export default UserForm;