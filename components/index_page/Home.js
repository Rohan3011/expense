import Link from 'next/link'


const Home = () => {
    return (
        <div id="home" className='h-[calc(100vh-2rem)] flex p-8'>
            <InfoText />
            <InfoImages />
        </div>
    )
}

export default Home;



const InfoText = () => {
    return (
        <div className="max-w-xl flex  flex-col pt-40  gap-4 p-4 ">
            <h1 className="text-6xl font-semibold text-slate-700 leading-normal">Shady Line And Some Big Claims</h1>
            <InfoTextActions />
        </div>
    )
}


const InfoImages = () => {
    return (
        <div className='grow flex items-center justify-center'>
            <div className="max-w-[500px] max-h-[500px] mockup-window border bg-base-300">
                <div className="flex justify-center p bg-base-200">Hello!</div>
            </div>
        </div>
    )
}



const InfoTextActions = () => {
    return (
        <div className="flex gap-2">
            <Link passHref href="/">
                <button className="text-slate-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 ">Login</button>
            </Link>
            <Link passHref href="/">
                <button className="px-4 py-2 rounded-lg bg-slate-600 font-semibold 
       hover:bg-gray-500 text-slate-100">
                    Signup</button>
            </Link>
        </div>
    )
}
