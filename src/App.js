import React, { useState } from 'react'

const App = () => {
  const [questionNumber,setQuestionNumber]=useState(1)
  const moneyPyramid=[
    {id:1,amount:"$100"},
    {id:2,amount:"$200"},
    {id:3,amount:"$300"},
    {id:4,amount:"$400"},
    {id:5,amount:"$500"},
    {id:6,amount:"$1000"},
    {id:7,amount:"$2000"},
    {id:8,amount:"$4000"},
    {id:9,amount:"$8000"},
    {id:10,amount:"$16000"},
    {id:11,amount:"$32000"},
    {id:12,amount:"$64000"},
    {id:13,amount:"$125000"},
    {id:14,amount:"$250000"},
    {id:15,amount:"$500000"},
  ].reverse()
  return (
    <div className='h-[800px] flex bg-[#020230] text-white'>
      <div className='w-3/4 h-full'><img className='w-full h-full items-center' src='https://www.medianews4u.com/wp-content/uploads/2020/02/KBC-1.jpg' alt='/'/>
      <div>
        <div></div></div></div>
      <div className='w-1/4 flex items-center justify-center'>
        <ul className='w-full p-4'>
          {moneyPyramid.map((m)=>(
          <li className={questionNumber===m.id?"bg-teal-400 rounded-xl":"bg-[#020230]"}><div className='flex items-center justify-between  rounded p-2'>
          <span className='text-xl  '>{m.id}</span>
          <span className='text-2xl '>{m.amount}</span></div></li>
          ))}
            </ul>
            </div>
      
    </div>
  )
}

export default App
