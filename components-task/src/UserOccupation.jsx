function UserOccupation({onChange}){

    return(
        <div className="user-occupation-container">
            <label htmlFor="occupation">Enter Your Occupation</label>
            <input type="text" placeholder="Enter Your Occupation" htmlFor="occupation" id="occupation" onChange={onChange}/>
        </div>
    )
}

export default UserOccupation