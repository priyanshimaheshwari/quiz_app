import React from 'react'
import Trivia from './components/Trivia'

const App = () => {
  
  return (
    <div className='relative'>
      
    <div className=' relative'>
    <div className='absolute text-gray-100 p-4'>
        <div className='pt-[300px]'><h1 className='w-28 h-28 border-8  rounded-full p-6 text-5xl'>30</h1></div>
        <h1 className='pt-[300px]'><Trivia /></h1>
      </div>
        {/* Overlay */}
        <div className='pl-[1200px]'>
        <div className=' absolute w-[350px] h-full text-gray-200  bg-[#23235b] flex flex-col  pl-2'>
          
            <h1 className='pt-20    text-xl'>15<span className='font-bold px-20'>$ 1000000</span></h1>
            <h1 className='   text-xl pt-2'>14<span className='font-bold px-20'>$ 500000</span></h1>
            <h1 className='   text-xl pt-2'>13<span className='font-bold px-20'>$ 250000</span></h1>
            <h1 className='   text-xl pt-2'>12<span className='font-bold px-20'>$ 125000</span></h1>
            <h1 className='   text-xl pt-2'>11<span className='font-bold px-20'>$ 64000</span></h1>
            <h1 className='   text-xl pt-2'>10<span className='font-bold px-20'>$ 32000</span></h1>
            <h1 className='   text-xl pt-2'>9<span className='font-bold px-[94px]'>$ 16000</span></h1>
            <h1 className='   text-xl pt-2'>8<span className='font-bold px-[94px]'>$ 8000</span></h1>
            <h1 className='   text-xl pt-2'>7<span className='font-bold px-[94px]'>$ 4000</span></h1>
            <h1 className='   text-xl pt-2'>6<span className='font-bold px-[94px]'>$ 2000</span></h1>
            <h1 className='   text-xl pt-2'>5<span className='font-bold px-[94px]'>$ 1000</span></h1>
            <h1 className='   text-xl pt-2'>4<span className='font-bold px-[94px]'>$ 500</span></h1>
            <h1 className='   text-xl pt-2'>3<span className='font-bold px-[94px]'>$ 300</span></h1>
            <h1 className='   text-xl pt-2'>2<span className='font-bold px-[94px]'>$ 200</span></h1>
            <h1 className='   text-xl pt-2'>1<span className='font-bold px-[94px]'>$ 100</span></h1>
        </div></div>
        <img className='w-full   object-cover' src="https://www.medianews4u.com/wp-content/uploads/2020/02/KBC-1.jpg" alt="/" />
    </div>
</div>
  )
}

export default App
