
import Header from "./header/page";
import Homeprofile from "./portfoliohomepage/homeprofile/homeprofile";

export default function Home() {
  
  return (
    <div className="bg-slate-800 h-screen p-12 ">
       <Header />
    <div className="flex justify-center p-12 bg-slate-400 h-96">
       
     <Homeprofile /> 
    
    </div>
     
    </div>
  );
}