import { useRef } from "react";
import Card from "./Card";
function Foreground() {
const ref= useRef(null);
  const data =[
    {desc : "Lorem dcnkdneknkdenk",
    filesize:".9mb",
     close:false,
    tag:{isOpen:true,tagTitle:"Download Now",tagColor:"blue"}
  },
  {desc : "Lorem dcnkdneknkdenk",
  filesize:".9mb",
   close:true,
  tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}
}
  ] ;


  return (
    <div  ref={ref} className='fixed  flex top-0 left-0 z-[3] w-full h-full gap-10 p-5 flex-wrap' >
    {data.map((item, index) => {
  return <Card key={index} data={item} reference={ref} />;
})}

    </div>
  )
}

export default Foreground ;
