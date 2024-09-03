import "@/app/styles/tailwind.css"
import CallToAction from "../components/CallToAction"
import FAQs from "../components/FAQs"
import Footer from "../components/Footer"
import Header from "../components/Header"
import data from "../data"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-[#111022] font-sans text-white">
          <Header data={data.components.header} />
          {children}
          <CallToAction data={data.components.callToAction} />
          <FAQs data={data.components.faqs} />
          <Footer data={data.components.footer} />
        </div>
      </body>
    </html>
  )
}
