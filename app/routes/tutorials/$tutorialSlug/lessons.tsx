import { Link, Outlet } from "@remix-run/react";

export default function Lessons() {

  return (
    <div className="flex bg-slate-800 h-full min-h-screen flex-grow flex-col">
      <div className="flex flex-grow flex-col lg:flex-row">
        <div className="relative z-50 w-full flex-shrink-0 border-r border-gray-800 lg:max-w-[280px] xl:max-w-xs hidden lg:block">
          <div className="top-0 lg:sticky">
            <aside>
              <div className="py-8 top-0 z-10 h-[150px] bg-gradient-to-t from-transparent via-gray-900 to-gray-900 lg:sticky">
                <div className="relative flex items-center gap-5 border-b border-gray-800 bg-gray-900 px-3 py-1">
                  <h2 className="w-full text-2xl font-semibold leading-none">Tutorial Title</h2>
                </div>
              </div>
              <div className="group relative h-[400px] overflow-y-auto pb-16 scrollbar-thin scrollbar-thumb-gray-800/70 hover:scrollbar-thumb-gray-700 lg:h-[calc(100vh-180px)]">
                <nav aria-label="lessons navigator">
                  <div>
                    <ul>
                      {Array.from({ length: 10 }).map((_, i) => (
                        <li key={i}>
                          <Link to="/lessons" className="flex items-center bg-gray-900 shadow-xl shadow-black/20 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                            </svg>

                            <h3 className="p-4 text-xl overflow-hidden">Setup the project</h3>
                          </Link>
                        </li>))}
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-16 w-full bg-gradient-to-t from-gray-900 to-transparent"></div>
            </aside>
          </div>
        </div>
        <main className="relative mx-auto w-full max-w-[1480px] items-start border-t border-transparent lg:mt-16 2xl:flex 2xl:max-w-none 2xl:border-gray-800">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
