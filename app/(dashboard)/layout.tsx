import React from "react"
import "styles/tailwind.css"
import Application from "./_components/Application"
import Header from "./_components/Header"
import Sidebar from "./_components/Sidebar"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="relative size-full overflow-hidden">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <div className="relative z-50 flex h-screen">
            <Sidebar />
            <div className="flex w-full flex-col">
              <Header />
              <Application>{children}</Application>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
export default layout
