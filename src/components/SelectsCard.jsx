import React from 'react'

const SelectsCard = (props) => {
  return (
    <div className='relative'>
    <img className='w-full h-full object-cover p-2' src={props.bg} alt="/" />
    <div className='bg-grey-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute '>
            {props.text}
        </p>
    </div>
</div>
  )
}

export default SelectsCard