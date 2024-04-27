import Header from "./header/page";
import Homeprofile from "./portfoliohomepage/homeprofile/homeprofile";

export default function Home() {
  return (
    <div className="bg-slate-800 h-screen p-12" style={{backgroundImage: "url('https://img.freepik.com/free-vector/paper-style-dynamic-lines-background_23-2149008629.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
      <Header />
      <div className="flex justify-center b-2 border-red-500 pt-16">
        <Homeprofile />
      </div>
    </div>
  );
}

