import Header from "./header/page";
import Summery from "./summery/page";

export default function Home() {
  return (
    <div className="p-5 ">
    <div className="flex pb-16 justify-end">
     
      <Header />
    </div>
     <div>
       <Summery />
     </div>
    </div>
  );
}
