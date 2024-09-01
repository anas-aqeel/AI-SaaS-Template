// components/ContactFormSection.tsx
import { Briefcase, Mail, MapPin } from "lucide-react"
import React from "react"
import { ContactInfoItem, ContactSection, FormField } from "../types"

const ContactFormSection: React.FC<ContactSection> = ({
  title,
  description,
  // backgroundColor,
  // textColor,
  form,
  contactInfo,
}) => {
  return (
    <div className={`relative bg-[#07070f]`}>
      <img src="/assets/bg.png" className="absolute inset-0 mx-auto size-full max-h-screen" />
      <div className="relative z-50 mx-auto max-w-5xl px-4 py-10 lg:py-20 xl:px-0 ">
        {/* Title */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <h2 className="text-2xl font-semibold text-white md:text-4xl md:leading-tight">{title}</h2>
          <p className="mt-1  text-white">{description}</p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:gap-x-16">
          {/* Form  */}
          <div className="mb-10  rounded-lg border-b  bg-black p-5 md:order-2 md:mb-0 md:border-b-0">
            <form>
              <div className="space-y-4">
                {form.fields.map((field: FormField, index: number) => (
                  <div key={index} className="relative">
                    <label htmlFor={field.id} className="mb-2 block text-sm text-white">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        className="block w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-400 placeholder:text-neutral-500 focus:border-yellow-500 focus:ring-neutral-600 disabled:pointer-events-none disabled:opacity-50"
                        placeholder={field.placeholder}
                      ></textarea>
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        className="block w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-400 placeholder:text-neutral-500 focus:border-yellow-500 focus:ring-neutral-600 disabled:pointer-events-none disabled:opacity-50"
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-2">
                <p className=" text-xs">{form.requiredFieldsMessage}</p>

                <p className="mt-5">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-yellow-500 px-4 py-3 text-sm font-medium text-white hover:bg-yellow-700 focus:bg-yellow-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {form.submitButtonText}
                  </button>
                </p>
              </div>
            </form>
          </div>
          {/* End Col */}

          {/* Contact Info */}
          <div className="space-y-14">
            {contactInfo.map((info: ContactInfoItem, index: number) => (
              <div key={index} className="flex gap-x-5">
                {/* Use Lucide React icons */}
                {info.icon === "location" && <MapPin className="text-sebg-slate-500 size-6 shrink-0" />}
                {info.icon === "mail" && <Mail className="text-sebg-slate-500 size-6 shrink-0" />}
                {info.icon === "briefcase" && <Briefcase className="text-sebg-slate-500 size-6 shrink-0" />}

                <div className="grow">
                  <h4 className="font-semibold text-white">{info.title}</h4>
                  {info.address && (
                    <address
                      className="text-sebg-slate-400 mt-1 text-sm not-italic"
                      dangerouslySetInnerHTML={{ __html: info.address }}
                    ></address>
                  )}
                  {info.email && (
                    <a
                      className="text-sebg-slate-400 hover:text-sebg-slate-200 focus:text-sebg-slate-200 mt-1 text-sm focus:outline-none"
                      href={`mailto:${info.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {info.email}{" "}
                    </a>
                  )}
                  {info.description && <p className="text-sebg-slate-400 mt-1">{info.description}</p>}
                  {info.linkText && info.linkUrl && (
                    <p className="mt-2">
                      <a
                        className="group inline-flex items-center gap-x-2 text-sm font-medium text-yellow-500 decoration-2 hover:underline focus:underline focus:outline-none"
                        href={info.linkUrl}
                      >
                        {info.linkText}
                        <svg
                          className="size-4 shrink-0 transition  group-hover:translate-x-0.5  group-focus:translate-x-0.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  )
}

export default ContactFormSection
