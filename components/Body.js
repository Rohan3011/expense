import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { sidebarState } from '../atoms/SidebarAtom';
import Header from './Header';
import Sidebar from './Sidebar';

const Body = ({ children }) => {

    const [sidebar, setSidebar] = useRecoilState(sidebarState);

    useEffect(() => {
        if (window.screen.availWidth >= 1024)
            setSidebar(true);
        else
            setSidebar(false);
    }, []);


    const styleSidebar = `bg-stone-100 h-full fixed z-50 ${sidebar ? 'left-0 lg:relative' : '-left-full'} transition  ease-out delay-1000`;
    const styleMain = `grow flex flex-col`;
    return (
        <div className='flex h-screen overflow-auto'>
            <aside className={styleSidebar}>
                <Sidebar />
            </aside>
            <main className={styleMain}>
                <Header />
                <section className='md:px-8 w-full h-full overflow-auto'>
                    {children}
                    <div className='h-20'></div>
                </section>
            </main>
        </div>
    )
}

export default Body;