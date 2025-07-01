export default function Contact() {
  return (
    <div className="pb-30">
      <div
        id="about"
        className="sm:justify-center rounded-lg p-6 md:p-8 max-w-7xl mx-auto flex flex-col"
      >
        <div className="relative flex flex-col md:flex-row items-center md:justify-start mb-12 gap-6">
          <h1 className="text-4xl font-inter font-bold text-gray-300 text-center md:text-left">
            <span className="text-[#A29BFE] font-mono">04.</span> What's next?
          </h1>
          <div className="h-0.5 w-81 bg-gradient-to-r from-[#4e3e4e] to-slate-950 rounded-md"></div>
        </div>

        <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center p-8 bg-gradient-to-br from-slate-800/20 to-slate-900/20 rounded-2xl shadow-lg border border-slate-500/20 transition-opacity duration-300 ease-in-out">
                <h1 className="text-inter text-xl text-gray-300 text-center">Looking to get in touch or just say hello? You can always reach me at: <a href="mailto:tferdous611@gmail.com" className="text-[#A29BFE] hover:underline cursor-pointer">tferdous611@gmail.com</a></h1>
            </div>
        </div>



      </div>
    </div>
  );
}
