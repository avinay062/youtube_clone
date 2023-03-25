import React from 'react'
import Button from './Button';

const ButtonList = () => {
  const List = ["All","Gaming","Food","Childrens","Mobiles","Laptops","Latest","headphones","JavaScript","Live","Songs"];
  return (
    <div className='flex'>
      {List.map((item)=>{
          return (
            <Button name={item}/>
          );
      })}
      
    </div>
  )
}

export default ButtonList;