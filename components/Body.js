import React, { Fragment, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Transition } from "@headlessui/react";
import { sidebarState } from "../atoms/SidebarAtom";
import useWindowSize from "../hooks/WindowSize";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Body = ({ children, alert }) => {
  const [sidebar, setSidebar] = useRecoilState(sidebarState);
  const { isMobile } = useWindowSize();

  useEffect(() => setSidebar(!isMobile), [isMobile]);

  return (
    <div className="flex w-full h-screen bg-white">
      {isMobile ? (
        <MobileSidebar isShowing={sidebar} hide={() => setSidebar(false)} />
      ) : (
        <DesktopSidebar isShowing={sidebar} />
      )}
      <main
        className={`grow h-full transition-transform duration-500 ease-in-out ${
          sidebar ? "lg:mx-6" : "lg:mx-14"
        }`}
      >
        <Header alert={alert} />
        {children}
      </main>
    </div>
  );
};

export default Body;

const MobileSidebar = ({ isShowing, hide }) => {
  return (
    /* The `show` prop controls all nested `Transition.Child` components. */
    <Transition show={isShowing}>
      {/* Background overlay */}
      <Transition.Child
        as={Fragment}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed lg:hidden w-full h-full backdrop-blur-sm z-10 transition-all delay-75 "
          onClick={hide}
        ></div>
      </Transition.Child>

      {/* Sliding sidebar */}
      <Transition.Child
        as={Fragment}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <aside className="bg-stone-100 min-h-screen z-50 fixed">
          <Sidebar />
        </aside>
      </Transition.Child>
    </Transition>
  );
};

const DesktopSidebar = ({ isShowing }) => {
  return (
    <Transition
      show={isShowing}
      as={Fragment}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <aside className="bg-stone-100 min-h-screen z-50 relative ">
        <Sidebar />
      </aside>
    </Transition>
  );
};
