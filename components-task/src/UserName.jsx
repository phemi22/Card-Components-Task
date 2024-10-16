function UserName({onChange}){

    return(
        <div className="username-container">
            <label htmlFor="username">Enter Your UserName</label>
            <input type="text" placeholder="Enter Your UserName" htmlFor="username" id="username" onChange={onChange}/>
        </div>
    )
}

export default UserName