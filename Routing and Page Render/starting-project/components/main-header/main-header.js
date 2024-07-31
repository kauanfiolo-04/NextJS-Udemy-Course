import Image from "next/image";
import Link from "next/link";
import logoImg from "@/app/icon.jpg";

const MainHeader=()=>{
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/news">Browse News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;