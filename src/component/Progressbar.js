import React, { useEffect, useState } from "react";

export default function Progressbar({ value=0,onComplete = () => {}} )
{
    const[percent, setPercent]= useState(value);
    useEffect(()=>{
        if(percent < 100)
        {
         setTimeout( ()=>setPercent(newval=>newval+1),80);
        }
        
        if (percent >= 99) {
            onComplete();
          }


    },[percent]);

    // useEffect(()=>{
       
    // },[percent])
     
    
    return(
        <>
           <div className="progressbar">
            <div className="progressbarfill" style={{ width: `${percent}%`}}> {percent} % </div>
            
            </div> 
        </>
    );
}