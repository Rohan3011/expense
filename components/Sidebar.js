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
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useRecoilState } from "recoil";
import { sidebarState } from "../atoms/SidebarAtom";

const Sidebar = () => {
  const router = useRouter();
  const styleSidebar = `w-60 h-full lg:flex flex-col`;
  console.log(router.pathname);
  return (
    <div className={styleSidebar}>
      <SidebarHeader userName={"rohanop"} />
      <SidebarLinks active={router.pathname} />
      {/* <SidebarRecentFollow /> */}
    </div>
  );
};

export default Sidebar;

const SidebarHeader = ({ userName }) => {
  const [sidebar, setSidebar] = useRecoilState(sidebarState);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="group flex h-16 px-4 items-center gap-2 border-b">
      <div className="p-2 rounded-full bg-gray-300">
        <HiUser className="text-xl text-slate-500" />
      </div>
      <span className="text-xl font-semibold text-slate-600">{userName}</span>
      <div
        className="lg:hidden group-hover:inline ml-auto p-2 rounded hover-animation"
        onClick={toggleSidebar}
      >
        <label htmlFor="my-drawer-2">
          <HiChevronDoubleLeft className="text-xl text-slate-700" />
        </label>
      </div>
    </div>
  );
};

const SidebarLinks = ({ active }) => {
  return (
    <div className="w-full flex flex-col">
      <SidebarLink
        title="Dashboard"
        icon={<MdOutlineSpaceDashboard />}
        link="/main"
        isActive={active === "/main"}
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
        className={`group p-2 flex items-center cursor-pointer hover:bg-stone-200 ${
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
