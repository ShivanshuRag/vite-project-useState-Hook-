import { useState } from "react"


function BgColor() {

    const [ color , setColor] = useState("yellow")
      
     
         

    return(
        
         <div
         className="w-full h-screen duration-100"
         style={{backgroundColor : color}}
         >
         
        <div className=" bg-slate-300 fixed  flex justify-self-auto flex-wrap gap-4 ml-5 mr-5 rounded-2xl p-3 "> 
             <button 
              onClick={()=> setColor("red")}
              style={{backgroundColor: " red"}}
              className="  p-2 rounded-xl bg-red-600  text-white">
              red
             </button>
             <button 
              onClick={()=> setColor("green")}
              style={{backgroundColor: " green"}}
              className="  p-2 rounded-xl bg-green-600 text-white">
              green
             </button>
             <button 
             onClick={()=> setColor("orange")}
              style={{backgroundColor: " orange"}}
              className="  p-2 rounded-xl bg-orange-600  text-white ">
              orange
             </button>
             <button 
             onClick={()=> setColor("purple")}
              style={{backgroundColor: " purple"}}
              className="  p-2 rounded-xl bg-purple-600  text-white ">
              purple
             </button>
        </div>
        </div>
      
        

    )
}

export default BgColor