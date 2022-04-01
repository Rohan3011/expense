import Link from 'next/link';
import {
    HiOutlineCash,
    HiOutlineChartBar,
    HiOutlineScale,
    HiTrendingUp,
    HiUser,
    HiOutlineCog,
    HiChevronDoubleLeft,
    HiX
} from 'react-icons/hi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { sidebarState } from '../atoms/SidebarAtom';



const Sidebar = () => {
    const styleSidebar = `w-60 h-full lg:flex flex-col`;
    return (
        <div className={styleSidebar}>
            <SidebarHeader userName={"rohanop"} />
            <SidebarLinks />
            {/* <SidebarRecentFollow /> */}
        </div>
    )
}

export default Sidebar;

const SidebarHeader = ({ userName }) => {
    const [sidebar, setSidebar] = useRecoilState(sidebarState);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };
    return (
        <div className='group flex h-16 px-4 items-center gap-2 border-b'>
            <div className='p-2 rounded-full bg-gray-300'>
                <HiUser className='text-xl text-slate-500' />
            </div>
            <span className="text-xl font-semibold text-slate-600">{userName}</span>
            <div className='lg:hidden group-hover:inline ml-auto p-2 rounded hover-animation' onClick={toggleSidebar} >
                <HiChevronDoubleLeft className='text-xl text-slate-700' />
            </div>
        </div>
    );
}


const SidebarLinks = () => {
    return (
        <div className='w-full flex flex-col'>
            <SidebarLink
                title="Dashboard"
                icon={<MdOutlineSpaceDashboard />}
                link="/main"
            />
            <SidebarLink title="Income"
                icon={<HiTrendingUp />}
                link="/income"

            />
            <SidebarLink
                title="Expense"
                icon={<HiOutlineCash />}
                link="/expense"
            />
            <SidebarLink
                title="Balance"
                icon={<HiOutlineScale />}
                link="/balance"
            />

            <SidebarLink
                title="Invest"
                icon={<HiOutlineChartBar />}
                link="/invest"
            />

            <SidebarLink
                title="Settings"
                icon={<HiOutlineCog />}
                link="/settings" />
        </div>
    );
}

const SidebarLink = ({ title, icon, link }) => {
    return (
        <Link passHref href={link}>
            <div className='group p-2 flex items-center hover-animation'>
                <i className='icons-main px-4'>{icon}</i>
                <span className='font-medium text-slate-700'>{title}</span>
            </div>
        </Link>
    );
}

const SidebarRecentFollow = () => {
    return (
        <div className='hidden lg:flex w-full flex-col border-y-2'>
            <SidebarLink title={"User1"} icon={<HiUser />} />
            <SidebarLink title={"User1"} icon={<HiUser />} />
            <SidebarLink title={"User1"} icon={<HiUser />} />
            <SidebarLink title={"User1"} icon={<HiUser />} />
            <SidebarLink title={"User1"} icon={<HiUser />} />
            <SidebarLink title={"User1"} icon={<HiUser />} />
            <SidebarLink title={"User1"} icon={<HiUser />} />
        </div>
    );
}

