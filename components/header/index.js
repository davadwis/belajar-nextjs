import Link from "next/link";

const Header = () => {
  return (
    <>
        <nav className="border fixed z-20 w-full top-0 shadow-xl shadow-sky-500/50 border-transparent backdrop-blur-sm">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 h-[64px]">
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 border text-2xl rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <Link href="/" className="font-light block rounded md:hover:bg-transparent md:hover:text-primary md:p-0 hover:text-sky-500">Home</Link>
                        </li>
                        <li>
                            <Link href="/users" className="font-light block rounded md:hover:bg-transparent md:hover:text-primary md:p-0 hover:text-sky-500">Users</Link>
                        </li>
                        <li>
                            <Link href="/profile" className="font-light block rounded md:hover:bg-transparent md:hover:text-primary md:p-0 hover:text-sky-500">Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
export default Header;