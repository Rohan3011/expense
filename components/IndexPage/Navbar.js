import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="fixed h-10 top-0 w-full z-10 ">
      <div className='bg-white px-8 py-4 md:px-[100px] flex flex-col md:flex-row items-center space-x-4'>
        <NavbarLogo />
        <NavbarLinks />
        <NavbarActions />
      </div>
    </div>
  )
}

export default Navbar;


const NavbarLogo = () => {
  return (
    <div className="flex items-center">
      <i>MyLogo</i>
    </div>
  );
}

const NavbarLinks = () => {
  return (
    <div className="grow flex flex-col md:flex-row items-center gap-2">
      <NavbarLink title={"Home"} link={"#home"} />
      <NavbarLink title={"Features"} link={"#features"} />
      <NavbarLink title={"Resoures"} link={"#resoures"} />
    </div>
  );
}

const NavbarLink = ({ title, link }) => {
  return (
    <div className='group px-4 py-2 hover:bg-gray-200 rounded-lg cursor-pointer'>
      <Link passHref href={link}>
        <span className="text-slate-800 text-lg group-hover:text-slate-700">{title} </span>
      </Link>
    </div>
  )
}

const NavbarActions = () => {
  return (
    <div className="flex gap-2">
      <Link passHref href="/">
        <button className="text-lg text-slate-800 px-6 py-2 rounded-lg hover:bg-gray-200 hover:text-slate-700 ">Login</button>
      </Link>
      <Link passHref href="/signup">
        <button className="text-lg px-6 py-2 rounded-lg bg-blue-700
     hover:bg-blue-600 text-slate-100 hover:text-slate-50">
          Signup</button>
      </Link>
    </div>
  )
}