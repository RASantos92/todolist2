import React from 'react'

const Results = (props) => {
    const {firstName, lastName, age, hair, email, password, confirmPassword } = props.data;
    return(
        <div>
            <h3>Information</h3>
            <p>First Name: {firstName} </p>
            <p>Last Name: {lastName} </p>
            <p>Age: {age} </p>
            <p>Hair Color: {hair} </p>
            <p>Email: {email} </p>
            <p>Password: {password} </p>
            <p>Confirm Password: {confirmPassword} </p>
        </div>
    )
}
export default Results;