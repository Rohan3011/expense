import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { sidebarState } from "../atoms/SidebarAtom";
import useWindowSize from "../hooks/WindowSize";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Body = ({ children }) => {
  const [sidebar, setSidebar] = useRecoilState(sidebarState);
  const { isMobile } = useWindowSize();

  useEffect(() => setSidebar(!isMobile), [isMobile]);

  return (
    <div className="">
      {sidebar ? (
        <div className="flex w-full">
          <aside className="bg-stone-100 min-h-screen z-50 fixed lg:relative transition  ease-out duration-700">
            <Sidebar />
          </aside>
          <main className="grow flex flex-col px-1 md:px-4">
            <Header />
            {children}
          </main>
        </div>
      ) : (
        <main className="grow flex flex-col px-1 md:px-8 lg:px-14">
          <Header />
          {children}
        </main>
      )}
    </div>
  );
};

export default Body;
