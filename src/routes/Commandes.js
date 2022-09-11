import React from "react"
//import MiniCard from "../components/MiniCard"
import MiniCard from "../components/MiniCard"
import Tabs from "../components/tabs"

const Commandes = ()=>{
    return (
        <div className=" flex flex-col  w-full h-screen m-2 bg-primaryBodyColor ">
            <div className="pt-6 w-full flex flex-wrap px-6 ">  
                <MiniCard/> 
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
          </div>
          <div className="pt-12">
          <Tabs/>
          </div>
           
            
        </div>
    )
}

export default Commandes