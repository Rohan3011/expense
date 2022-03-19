import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';

const Body = ({ children }) => {
    return (
        <div className='flex h-screen overflow-hidden'>
            <aside className='bg-stone-100'>
                <Sidebar />
            </aside>
            <main className='grow'>
                <Header />
                <section className='px-8 h-full overflow-auto'>
                    {children}
                    <div className='h-20'></div>
                </section>
            </main>
        </div>
    )
}

export default Body;