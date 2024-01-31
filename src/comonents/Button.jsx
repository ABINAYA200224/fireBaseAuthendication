import React from 'react'

function Button({onClick,btn_type,className,btn_name}) {
  return (
    <div>
       <button type={btn_type} className='bg-[#575DFB] w-[400px] h-[40px] border-5 text-[#FFF] rounded-md' onClick={onClick}>{btn_name}</button>
    </div>
  )
}

export default Button
