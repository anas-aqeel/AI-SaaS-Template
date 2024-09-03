import Image from "next/image"
import React from "react"
import Header from "@/app/components/Header"
import data from "@/app/data"
import "@/app/styles/tailwind.css"

const layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-neutral-900">
        <Header data={data.components.header} />
        <div className="flex min-h-[88vh] justify-center">
          <div className="m-0 flex max-w-screen-xl flex-1 justify-center bg-neutral-900 sm:bg-black shadow sm:m-10 sm:rounded-lg">
            <div className="p-6 sm:p-12 flex items-center w-full lg:w-1/2 xl:w-5/12">
              <div className="flex flex-col w-full max-w-sm mx-auto justify-center">
                {children}
              </div>
            </div>
            <div className="hidden flex-1 bg-yellow-100 text-center lg:flex">
              <div className="m-12 w-full bg-contain bg-center bg-no-repeat xl:m-16" style={{ "backgroundImage": `url('https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz')` }}></div>
            </div>
          </div>
        </div>


      </body>
    </html>
  )
}

export default layout
