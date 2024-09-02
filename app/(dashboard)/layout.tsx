import React from "react"
import "styles/tailwind.css"
import Header from "./_components/Header"
import Sidebar from "./_components/Sidebar"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="relative size-full overflow-hidden bg-neutral-900">
          <div className="relative z-50 flex h-screen">
            <Sidebar />
            <div className="ml-[74px] flex w-full flex-col lg:ml-0">
              <Header />
              <div className="flex-1 p-0">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
export default layout
