import React from 'react'

function Passwordinput({ password }) {
    const handleCopy =()=>{
        navigator.clipboard.writeText(password);
    }
    return (
       <div className='container  d-flex align-items-center justify-content-between'>

            <div>
                <h3 className='p-2 ' style={{ color: "white" }}>{password ? password : "Password Generator"}</h3>
            </div>

            <div>
                <i className="fa-regular fa-copy" style={{ color: "white", fontSize: "1.3rem" }} onClick={handleCopy}></i>
            </div>

        </div>
        

    )
}

export default Passwordinput
