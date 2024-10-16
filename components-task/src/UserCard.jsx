import React, {useState} from 'react'
import UserName from "./UserName.jsx"
import UserAge from "./UserAge.jsx"
import UserOccupation from "./UserOccupation.jsx"
import PropTypes from "prop-types"

function UserCard(){

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [occupation, setOccupation] = useState('')

    const handleNameChange = (event)=>setName(event.target.value)
    const handleAgeChange = (event)=>setAge(event.target.value)
    const handleOccupationChange = (event)=>setOccupation(event.target.value)

    
    return(
        <div className="main-container">
            <UserName onChange={handleNameChange} />
            <UserAge onChange={handleAgeChange}/>
            <UserOccupation onChange={handleOccupationChange}/>

            <div className="user-info-display">
                <h4>User Information</h4>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Occupation: {occupation}</p>
            </div>
        </div>
    )
}

UserCard.propTypes = {
    UserName: PropTypes.string.isRequired,
    UserAge: PropTypes.number.isRequired,
    UserOccupation: PropTypes.string.isRequired
}

UserCard.defaultProps = {
    UserName: "john1980",
    UserAge: 32,
    UserOccupation: "Software Engineer",
}

export default UserCard