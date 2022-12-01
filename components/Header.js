import Link from "next/link";
import { HiMenuAlt2, HiX, HiSearch, HiOutlineBell } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { sidebarState } from "../atoms/SidebarAtom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 rounded h-14 flex">
        <HeaderRight />
        <HeaderCenter />
        <HeaderLeft />
      </div>
    </div>
  );
};

export default Header;

const HeaderRight = () => {
  const [sidebar, setSidebar] = useRecoilState(sidebarState);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div
      className="px-2 flex justify-center items-center"
      onClick={toggleSidebar}
    >
      <HiMenuAlt2 className="h-5 w-5 swap-on fill-current text-slate-600" />
    </div>
  );
};

const HeaderCenter = () => {
  const [header, setHeader] = useState("");

  useEffect(() => {
    const getHeader = () => {
      let data = window.location.pathname;
      data = data.charAt(1).toUpperCase() + data.slice(2);
      setHeader(data);
    };
    getHeader();
  }, [header]);
  return (
    <div className="grow flex justify-between items-center">
      <Link href={"/"}>
        <a className="text-xl font-semibold text-slate-600">MyExpense</a>
      </Link>
      <input
        className="w-full max-w-md ml-2 border p-1.5 transform transition duration-500 focus:outline-2 focus:outline-gray-500 outline-offset-[-2px] focus:z-10  focus-within:shadow-sm rounded-md overflow-x-auto "
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

const HeaderLeft = ({}) => {
  return (
    <div className="px-4 flex items-center">
      <button className="p-2 rounded  flex items-center justify-center  cursor-pointer hover:bg-gray-200">
        <HiSearch className="h-5 w-5 text-slate-600" />
      </button>
      <button className="p-2 rounded  flex items-center justify-center cursor-pointer hover:bg-gray-200">
        <HiOutlineBell className="h-5 w-5 text-slate-600" />
      </button>
    </div>
  );
};
