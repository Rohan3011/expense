import Link from "next/link";
import { Router, useRouter } from "next/router";
import {
  HiOutlineCash,
  HiOutlineChartBar,
  HiOutlineScale,
  HiTrendingUp,
  HiUser,
  HiOutlineCog,
  HiChevronDoubleLeft,
  HiX,
} from "react-icons/hi";
import { Transition } from "@headlessui/react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux/slices/sidebarSlice";
import { selectCurrentUser } from "../redux/slices/authSlice";
import { useProfileQuery } from "../redux/api/userApiSlice";
import { useEffect } from "react";

const Sidebar = () => {
  const { data: user, error, isLoading } = useProfileQuery();
  const dispatch = useDispatch();
  const router = useRouter();
  const toggleSidebar = () => {
    dispatch(toggle());
  };

  return (
    <div className="w-60 h-full lg:flex flex-col">
      <div className="group flex h-16 px-4 items-center gap-2 border-b">
        <div className="p-2 rounded-full bg-gray-300">
          <HiUser className="text-xl text-slate-500" />
        </div>
        <span className="text-xl font-semibold text-slate-600 max-w-fit truncate">
          {user?.name}
        </span>
        <div
          className="lg:hidden group-hover:inline ml-auto p-2 rounded hover-animation"
          onClick={toggleSidebar}
        >
          <label htmlFor="my-drawer-2">
            <HiChevronDoubleLeft className="text-xl text-slate-700" />
          </label>
        </div>
      </div>
      <SidebarLinks active={router.pathname} />
    </div>
  );
};

export default Sidebar;

// const SidebarHeader = ({ userName }) => {

//   return (
//     <Transition
//       show={sidebar}
//       enter="transition-opacity duration-75"
//       enterFrom="opacity-0"
//       enterTo="opacity-100"
//       leave="transition-opacity duration-150"
//       leaveFrom="opacity-100"
//       leaveTo="opacity-0"
//     >
//       <div className="group flex h-16 px-4 items-center gap-2 border-b">
//         <div className="p-2 rounded-full bg-gray-300">
//           <HiUser className="text-xl text-slate-500" />
//         </div>
//         <span className="text-xl font-semibold text-slate-600 max-w-fit truncate">
//           {userName}
//         </span>
//         <div
//           className="lg:hidden group-hover:inline ml-auto p-2 rounded hover-animation"
//           onClick={toggleSidebar}
//         >
//           <label htmlFor="my-drawer-2">
//             <HiChevronDoubleLeft className="text-xl text-slate-700" />
//           </label>
//         </div>
//       </div>
//     </Transition>
//   );
// };

const SidebarLinks = ({ active }) => {
  return (
    <div className="w-full flex flex-col">
      <SidebarLink
        title="Dashboard"
        icon={<MdOutlineSpaceDashboard />}
        link="/dashboard"
        isActive={active === "/dashboard"}
      />
      <SidebarLink
        title="Income"
        icon={<HiTrendingUp />}
        link="/income"
        isActive={active === "/income"}
      />
      <SidebarLink
        title="Expense"
        icon={<HiOutlineCash />}
        link="/expense"
        isActive={active === "/expense"}
      />
      <SidebarLink
        title="Balance"
        icon={<HiOutlineScale />}
        link="/balance"
        isActive={active === "/balance"}
      />

      <SidebarLink
        title="Invest"
        icon={<HiOutlineChartBar />}
        link="/invest"
        isActive={active === "/invest"}
      />

      <SidebarLink
        title="Settings"
        icon={<HiOutlineCog />}
        link="/settings"
        isActive={active === "/settings"}
      />
    </div>
  );
};

const SidebarLink = ({ title, icon, link, isActive }) => {
  return (
    <Link passHref href={link || ""}>
      <div
        className={`group p-2 flex items-center cursor-pointer hover:opacity-75 ${
          isActive ? "bg-gray-300" : "bg-transparent"
        } `}
      >
        <i className="icons-main px-4">{icon}</i>
        <span className="font-medium text-slate-700">{title}</span>
      </div>
    </Link>
  );
};

const SidebarRecentFollow = () => {
  return (
    <div className="hidden lg:flex w-full flex-col border-y-2">
      <SidebarLabel label={"recent follows"} />
      <SidebarLink title={"User1"} icon={<HiUser />} />
      <SidebarLink title={"User1"} icon={<HiUser />} />
      <SidebarLink title={"User1"} icon={<HiUser />} />
      <SidebarLink title={"User1"} icon={<HiUser />} />
      <SidebarLink title={"User1"} icon={<HiUser />} />
      <SidebarLink title={"User1"} icon={<HiUser />} />
      <SidebarLink title={"User1"} icon={<HiUser />} />
    </div>
  );
};

const SidebarLabel = ({ label }) => {
  return (
    <div className="group p-2 flex items-center">
      <span className="text-sm font-semibold text-gray-500">{label}</span>
    </div>
  );
};
