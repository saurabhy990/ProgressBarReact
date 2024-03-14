import React, { useEffect, useState } from "react";
import Progressbar from "./component/Progressbar";
export default function App() {

  const[progress,setProgress]= useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
   setInterval( ()=>{ 
    setProgress( (val)=>val+0.1);
   },10);
  },[]);
   return (
    < >
    <div className="App">  
    <div className="container">
    <h1 className="mt-3 mb-3">Progress Bar</h1>
      <div className="row justify-content-md-center">
        <div className="col-md-6">
           <Progressbar value={ progress} onComplete={() => setSuccess(true)} />
           <span>{success ? "Complete!" : "Loading..."}</span>
        </div>
      </div>
      </div>    
     
    </div>
    </ >
  );
}

