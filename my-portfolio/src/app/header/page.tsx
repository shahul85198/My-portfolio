import Link from "next/link";
import About from "../../../components/Header/about";
import Email from "../../../components/Header/email";
import Home from "../../../components/Header/home";
import Work from "../../../components/Header/skills";

export default function Header() {
    return (
      <div className="">
        <div className="flex gap-16 justify-end text-white text-xl">
          <div>
            <Link href='/portfoliohomepage/homeprofile'>
              <button><Home /></button>
              </Link>
             </div>
        <div> <Work /> </div>
        <div> <Email /> </div>
        <div> <About /> </div>
      </div>
      </div>
    );
  }
  