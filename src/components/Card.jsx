import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
function Card() {
  return (
    <div className=" relative w-60 h-72  rounded-[20px] bg-zinc-900/90 text-white p-5 overflow-hidden"> 
<FaRegFileAlt />
<p className="text-xs leading-tight mt-5 font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum vero commodi nisi, sint quia amet obcaecati, ab omnis iste nobis at accusantium nulla ratione blanditiis
     ipsa ad dolorem voluptatem sed.</p>
     <div className="footer absolute bottom-0 w-full py-3 px-8 left-0">
    <div  className=" flex items-center justify-between mb-5">
        <h5>.4mb</h5> 
        <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
    <FaDownload size=".8em" color="#000" /></span>
    </div>
    </div>
    </div>
  )
}

export default Card;
