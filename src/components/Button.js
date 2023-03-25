import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-5 py-1 mx-2 my-2 bg-gray-100  rounded-lg'>{name}</button>
    </div>
  )
}

export default Button;