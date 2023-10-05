const Footer = () => {
  return (
    <>
      <div className="fixed z-20 w-full bottom-0 shadow-[0_25px_25px_36px_rgba(0,0,0,0.3)] shadow-sky-500/50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 h-[64px]">
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 border text-2xl rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="font-light block rounded md:hover:bg-transparent md:hover:text-primary md:p-0 hover:text-sky-500">Footer</a>
                        </li>
                    </ul>
                </div>
            </div>
      </div>
    </>
  )
}
export default Footer;