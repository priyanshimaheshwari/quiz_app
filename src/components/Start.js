import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="flex flex-col w-[200px] h-[100px] relative m-auto items-center justify-around ">
        <input className="w-[200px] h-[30px] rounded-md text-center  outline-none text-black text-lg bg-slate-50 " placeholder="Enter your name" 
        ref={inputRef}/>
        <button className="w-[200px] h-[30px] rounded-md cursor-pointer text-lg bg-slate-100 text-black" onClick={handleClick}>Start</button>
    </div>
  )
}
