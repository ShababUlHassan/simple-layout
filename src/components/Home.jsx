import React, { useState } from 'react'

const Home = () => {
    const [count, setCount] = useState(0)

    const Add = ()=>{
        if(count < 10){
            setCount((e)=> e +1 )
        }
    }
    const Subtract = ()=>{
        if(count > 0){
            setCount((e)=> e -1)
        }
    }

    const Reset = ()=>{
        setCount(0)
    }
  return (
    <div className='flex justify-center h-[90vh] items-center flex-col'>
        <h3 className='text-red-400 font-semibold text-[30px]'>Home Page</h3>
        <h2>Counter</h2>
        <p>{count}</p>
        <div className="btns flex gap-3">
            <button onClick={Subtract} className='py-[12px] px-[26px] bg-orange-600 text-white text-[14px] font-semibold rounded-md'>Decrement</button>
            <button onClick={Reset} className='py-[12px] px-[26px] bg-orange-600 text-white text-[14px] font-semibold rounded-md'>Reset</button>
            <button onClick={Add} className='py-[12px] px-[26px] bg-orange-600 text-white text-[14px] font-semibold rounded-md'>Incremennt</button>
        </div>
    </div>
  )
}

export default Home