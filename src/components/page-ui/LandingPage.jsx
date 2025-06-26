export default function LandingPage() {
    return (
        <div className="relative absolute inset-0 bg-[radial-gradient(circle_550px_at_19%_200px,#4e3e4e,transparent)]">
            <div className="h-screen flex flex-col justify-center ml-[20rem] gap-5">
                <span className="text-2xl text-[#A29BFE] font-mono">Hi, my name is</span>
                <h1 className="name-header text-8xl text-gray-300 font-bold"><span className="drop-shadow-[0px_0px_28px_rgba(235,235,235,0.4)]">Tasnim F</span>erdous.</h1>
                <h1 className="text-5xl text-gray-400">I build distributed systems and engaging digital experiences.</h1>
                <p className="w-[50%] text-gray-500 text-[19px] mt-3 mb-3">
                    I'm a software developer and final-year computer science student at Farmingdale State College, NY, 
                    with a passion for building scalable and highly performant backend systems. Additionally, I equally enjoy
                    creating full-stack applications that make peoples' daily lives just a little easier.
                </p>
                <div className="flex gap-4">
                    {/* <button class="cursor-pointer group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-gray-100 via-gray-200 to-gray-400 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg px-5 py-2.5 text-center text-black me-2 mb-2"><span>Resume</span><div class="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
                    <button class="cursor-pointer group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"><span>LinkedIn</span><div class="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
                    <button class="cursor-pointer group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"><span>GitHub</span><div class="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button> */}
                    <a href="https://drive.google.com/file/d/1CWfZ6hHoaVR9qmPgJlN4L96-GknWbZTS/view?usp=sharing" target="_blank">
                        <button class="cursor-pointer group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border-2 border-purple-500 bg-transparent px-6 font-medium text-purple-500 transition-all duration-100 [box-shadow:5px_5px_rgb(124_61_196)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]">Resume</button>
                    </a>
                    <a href="https://www.linkedin.com/in/tferdous17/" target="_blank">
                        <button class="cursor-pointer group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border-2 border-[#0a66c2] bg-transparent px-6 font-medium text-blue-500 transition-all duration-100 [box-shadow:5px_5px_rgb(0_65_130)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]">LinkedIn</button>
                    </a>
                    <a href="https://github.com/tferdous17" target="_blank">
                        <button class="cursor-pointer group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border-2 border-gray-500 bg-transparent px-6 font-medium text-gray-500 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)]">GitHub</button>
                    </a>
                </div>
            </div>
        </div>
        
    )
}
