import React from 'react'

function Lable({labe_text,className,datafor}) {
  return (
    <div>
       <label for={datafor} className={`${className}`} >{labe_text}</label>
    </div>
  )
}

export default Lable
