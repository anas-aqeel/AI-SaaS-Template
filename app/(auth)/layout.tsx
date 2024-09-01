import React from "react"
import Header from "app/components/Header"
import data from "app/data"
import "styles/tailwind.css"

const layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-[#111022]">
        <Header data={data.components.header} />
        <div className=" relative flex min-h-[88vh] w-full items-center  justify-center font-sans">
          <img src="/assets/bg.png" className="absolute inset-0 mx-auto size-full max-h-screen" />
          <div className="relative z-50 w-full">{children}</div>
        </div>
      </body>
    </html>
  )
}

export default layout
