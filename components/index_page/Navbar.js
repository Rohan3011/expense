import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="fixed h-10 top-0 w-full z-10">
      <div className='bg-white px-8 py-4 flex items-center space-x-4'>
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
    <div className="grow flex items-center gap-2">
      <NavbarLink title={"Home"} link={"#home"} />
      <NavbarLink title={"Features"} link={"#features"} />
      <NavbarLink title={"Resoures"} link={"#resoures"} />
    </div>
  );
}

const NavbarLink = ({ title, link }) => {
  return (
    <div className='px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer'>
      <Link passHref href={link}>
        <span className="text-slate-700 text-lg font-semibold ">{title} </span>
      </Link>
    </div>
  )
}

const NavbarActions = () => {
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