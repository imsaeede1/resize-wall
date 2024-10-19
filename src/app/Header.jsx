
import Link from "next/link";

function Header() {
  return (
    <header
      className={`shadow-md sticky top-0 bg-[#DAE8FC]`}
    >
      <nav>
        <ul className="flex items-center  justify-between py-2 px-10 max-w-screen-xl">
          <li>
            <Link className="block py-2 " href="/">
             <div className=" border-2 bg-[#F5F5F5] border-gray-950 h-12 flex justify-center items-center w-12 rounded-full">Logo</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
