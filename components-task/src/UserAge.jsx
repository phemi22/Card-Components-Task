function UserAge({onChange}){

    return(
        <div className="user-age-container">
            <label htmlFor="userage">Enter Your Age</label>
            <input type="number" placeholder="Enter Your Age" htmlFor="userage" id="userage" onChange={onChange}/>
        </div>
    )
}

export default UserAge