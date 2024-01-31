import React from 'react'

function Input({type,lable_name,placeholder,name,onChange,value,error,className,InputDisable=false,disabled=false,checked=false}) {
  return (
    <div>
       <label>{lable_name}</label>
       <input type={type} className={`w-full h-full border-2 border-[#575DFB] rounded-lg p-[20px] text-[#424242] ' ${className} ${InputDisable?"cursor-no-drop bg-[#1597E4] opacity-20":""}`} placeholder={placeholder} name={name} onChange={onChange} value={value} disabled={disabled}  checked={checked}></input>
       <p className='text-[10px] text-[red]'>{ error?error:""} </p>
    </div>
  )
}

export default Input
