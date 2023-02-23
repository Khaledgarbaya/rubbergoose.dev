import { Outlet } from "@remix-run/react";

export default function Lessons() {

  return (
    <div className="flex bg-slate-800 h-full min-h-screen flex-grow flex-col">
      <div className="flex flex-grow flex-col lg:flex-row">
        <div className="relative z-50 w-full flex-shrink-0 border-r border-gray-800 lg:max-w-[280px] xl:max-w-xs hidden lg:block">
          <div className="top-0 lg:sticky">
            <aside></aside>
          </div>
        </div>
        <main className="relative mx-auto w-full max-w-[1480px] items-start border-t border-transparent lg:mt-16 2xl:flex 2xl:max-w-none 2xl:border-gray-800">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
