import Link from 'next/link'

import {
    HiOutlineCash,
    HiOutlineChartBar,
    HiOutlineMail,
    HiTrendingUp,
    HiUser,
    HiOutlineCog
} from 'react-icons/hi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';



const Sidebar = () => {
    return (
        <div className='lg:w-60 h-full flex flex-col'>
            <SidebarHeader />
            <SidebarLinks />
            {/* <SidebarRecentFollow /> */}
        </div>
    )
}

export default Sidebar;

const SidebarHeader = () => {
    return (
        <div className='flex h-16 justify-center items-center border-b'>
            <span>UserName</span>
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
                title="Invest"
                icon={<HiOutlineChartBar />}
                link="/invest"
            />
            <SidebarLink
                title="Messages"
                icon={<HiOutlineMail />}
                link="/message"
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
                <span className='hidden lg:inline font-semibold text-slate-700'>{title}</span>
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

