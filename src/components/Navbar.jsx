export default function Navbar() {
  return (
    <nav class="bg-transparent fixed w-full z-20 top-1 start-0 border-none">
      <div class="flex flex-wrap justify-end mx-auto p-4 gap-10">
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mr-8">
            <a href="https://drive.google.com/file/d/1CWfZ6hHoaVR9qmPgJlN4L96-GknWbZTS/view?usp=sharing" target="_blank">
              <button class="cursor-pointer group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-[#A29BFE] px-5 font-medium font-mono text-black"><span>Resume</span><div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div class="relative h-full w-8 bg-white/20"></div></div></button>
            </a>
          {/* <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
        </div>
        <div
          class="items-center justify-end hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-mono text-sm">
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 hover:text-[#A29BFE] transition-all duration-300 ease-in-out"
                aria-current="page"
              >
                <span className="text-[#A29BFE]">01.</span> About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 hover:text-[#A29BFE] transition-all duration-300 ease-in-out"
              >
                <span className="text-[#A29BFE]">02.</span> Experience
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 hover:text-[#A29BFE] transition-all duration-300 ease-in-out"
              >
                <span className="text-[#A29BFE]">03.</span> Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 hover:text-[#A29BFE] transition-all duration-300 ease-in-out"
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
