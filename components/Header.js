import Link from 'next/link'
import { HiMenuAlt2, HiX, HiSearch, HiOutlineBell } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { sidebarState } from '../atoms/SidebarAtom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 rounded">
                <HeaderRight />
                <HeaderCenter />
                <HeaderLeft />
            </div>
        </div >
    )
}

export default Header;


const HeaderRight = () => {
    const [sidebar, setSidebar] = useRecoilState(sidebarState);
    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };
    return (
        <div className='px-2'>
            <label className="p-2 rounded cursor-pointer swap swap-rotate hover:bg-gray-200">
                <input type="checkbox" onClick={toggleSidebar} />
                <HiMenuAlt2 className="h-5 w-5 swap-off fill-current text-slate-600" />
                <HiMenuAlt2 className="h-5 w-5 swap-on fill-current text-slate-600" />
            </label>
        </div>
    );
}

const HeaderCenter = () => {
    const [header, setHeader] = useState("")

    useEffect(() => {
        const getHeader = () => {
            let data = window.location.pathname;
            data = data.charAt(1).toUpperCase() + data.slice(2);
            setHeader(data);
        }
        getHeader()
    }, [header])
    return (
        <div className="grow flex justify-start items-center ">
            <Link href={"/"}>
                <a className="text-xl font-semibold text-slate-600">MyExpense</a>
            </Link>
        </div>

    )
}


const HeaderLeft = () => {
    return (
        <div className='px-4'>
            <button className="p-2 rounded cursor-pointer hover:bg-gray-200">
                <HiSearch className="h-5 w-5 text-slate-600" />
            </button>
            <button className="p-2 rounded cursor-pointer hover:bg-gray-200">
                <HiOutlineBell className="h-5 w-5 text-slate-600" />
            </button>
        </div>
    )
}