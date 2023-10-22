const Footer = () => {
  return (
    <>
      <div className="fixed z-20 w-full bottom-0 shadow-[0_25px_25px_36px_rgba(0,0,0,0.3)] shadow-sky-500/50 backdrop-blur-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 h-[64px]">
          <div
            className="items-center justify-between w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col md:p-0 text-2xl rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <p className="md:mt-2 mt-0 text-base leading-6 text-center text-gray-400">
                  © 2023 DailyNotes | Muhamad Dava Dwi Saputra. All rights
                  reserved.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
