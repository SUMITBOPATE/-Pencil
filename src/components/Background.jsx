
import { SiAddthis } from "react-icons/si";
import New_todoinput from "./New_todoinput";
import { useState } from "react";
function Background () {

  const [isModalOpen,setIsModalOpen]=useState(false);
  const openModal = () => {
    console.log("hi")
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  return (
   <>
<nav className='relative flex items-center justify-between px-6 py-4 bg-zinc-700'>
  <div className=' absolute left-0 right-0 flex items-center justify-center w-full'>
    <h2 className='text-lg text-white font-semibold'>pencil.</h2>
  </div>


  <div className=" flex items-center">
  {/* <SiAddthis size="1.8em" color="#fff"/> */}
  <button onClick={openModal} className="z-10" ><SiAddthis size="2.8em" color="#fff"/></button>

    <New_todoinput  isOpen={isModalOpen} onClose={closeModal} />
  </div>
</nav>
 <div className='w-full py-10 '></div>
 <h1 className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[13vw] leading-none tracking-tight font-semibold'>pencil.</h1></>
  )
}

export default Background;