export default function Navbar() {
  return (
    <nav className="bg-transparent fixed w-full z-20 top-0 start-0 border-none backdrop-blur-xl">
      <div className="flex flex-wrap justify-end mx-auto p-4 gap-10">
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mr-8">
          <a
            href="https://drive.google.com/file/d/1CWfZ6hHoaVR9qmPgJlN4L96-GknWbZTS/view?usp=sharing"
            target="_blank"
          >
            <button className="cursor-pointer group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-[#A29BFE] px-5 font-medium font-mono text-black">
              <span>Resume</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </button>
          </a>
        </div>
        <div
          class="items-center justify-end hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-mono text-sm">
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 hover:text-[#A29BFE] transition-all duration-300 ease-in-out"
                aria-current="page"
              >
                <span className="text-[#A29BFE]">01.</span> About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 hover:text-[#A29BFE] transition-all duration-300 ease-in-out"
              >
                <span className="text-[#A29BFE]">02.</span> Experience
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 hover:text-[#A29BFE] transition-all duration-300 ease-in-out"
              >
                <span className="text-[#A29BFE]">03.</span> Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 hover:text-[#A29BFE] transition-all duration-300 ease-in-out"
              >
                <span className="text-[#A29BFE]">04.</span> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
