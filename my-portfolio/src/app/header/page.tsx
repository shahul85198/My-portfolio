import About from "../../../Header/about";
import Email from "../../../Header/email";
import Home from "../../../Header/home";
import Work from "../../../Header/work";

export default function Header() {
    return (
      <div className="">
        <div className="gap-16 flex">
          <div><Home /> </div>
        <div> <Work /> </div>
        <div> <Email /> </div>
        <div> <About /> </div>
      </div>
      </div>
    );
  }
  