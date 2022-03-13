import React from 'react'

import {
    HiOutlineHome,
    HiOutlineHashtag,
    HiOutlineMail,
    HiOutlineBell,
    HiUser
} from 'react-icons/hi';

import { MdSpaceDashboard } from 'react-icons/md';


const Sidebar = () => {
    return (
        <div classNameName='bg-red-300 flex w-72  h-full flex-col'>
            <SidebarHeader />
            <SidebarLinks />
            {/* <SidebarRecentFollow /> */}
        </div>

        // drawer
        // <div classNameName="drawer drawer-end h-screen w-full">
        //     <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        //     <div className="drawer-content">
        //         {/* <!-- Page content here --> */}
        //         <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
        //     </div>
        //     <div className="drawer-side">
        //         <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        //         <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        //             {/* <!-    - Sidebar content here --> */}
        //             <li><a>Sidebar Item 1</a></li>
        //             <li><a>Sidebar Item 2</a></li>

        //         </ul>
        //     </div>
        // </div>
    )
}

export default Sidebar;

const SidebarHeader = () => {
    return (
        <div classNameName='flex h-12 justify-center items-center border-b'>
            {/* <Image
                src="/imposter.png"
                alt="Picture of the author"
                width={28}
                height={28}
                classNameName=""
            /> */}
            <span>Header</span>
        </div>
    );
}


const SidebarLinks = () => {
    return (
        <div classNameName='w-full flex flex-col pl-12'>
            <SidebarLink title="Dashboard" icon={<MdSpaceDashboard />} />
            <SidebarLink title="Explore" icon={<HiOutlineHashtag />} />
            <SidebarLink title="Notifications" icon={<HiOutlineBell />} />
            <SidebarLink title="Messages" icon={<HiOutlineMail />} />
        </div>
    );
}

const SidebarLink = ({ title, icon }) => {
    return (
        <div classNameName='group flex items-center hover-animation'>
            <i classNameName='icons-main'>{icon}</i>
            <span classNameName='hidden lg:inline font-semibold'>{title}</span>
        </div>
    );
}

const SidebarRecentFollow = () => {
    return (
        <div classNameName='hidden lg:flex w-full flex-col justify-center border-y-2'>
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

