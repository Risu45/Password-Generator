import React  from 'react'

function Passwordlength({length , setLength}) {
  return (
    <div className='container'>
      <span> <label htmlFor="">length</label>
      <label htmlFor="">{length}</label>
      </span>
        {/* <label htmlFor="">length</label> */}
      <input type="range" min="4" max="20"  value={length} onChange={(event)=>setLength(event.target.value)} style={{width:"100%"}}/>
    </div>
  )
}

export default Passwordlength
