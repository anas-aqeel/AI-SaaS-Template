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
    <div className={`bg-slate-900`}>
      <div className="mx-auto max-w-5xl px-4 py-10 lg:py-20 xl:px-0">
        {/* Title */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <h2 className="text-2xl font-semibold text-white md:text-4xl md:leading-tight">{title}</h2>
          <p className="text-sebg-slate-400 mt-1">{description}</p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:gap-x-16">
          {/* Form  */}
          <div className="border-sebg-slate-800 mb-10 border-b pb-10 md:order-2 md:mb-0 md:border-b-0 md:pb-0">
            <form>
              <div className="space-y-4">
                {form.fields.map((field: FormField, index: number) => (
                  <div key={index} className="relative">
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        className="peer block w-full rounded-md border-transparent bg-slate-800 p-4 text-sm text-white placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                        placeholder={field.placeholder}
                      ></textarea>
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        className="peer block w-full rounded-md border-transparent bg-slate-800 p-4 text-sm text-white placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                        placeholder={field.placeholder}
                      />
                    )}
                    <label
                      htmlFor={field.id}
                      className="text-sebg-slate-400 peer-focus:text-sebg-slate-400 peer-[:not(:placeholder-shown)]:text-sebg-slate-400 pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-xs"
                    >
                      {field.label}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-2">
                <p className="text-sebg-slate-500 text-xs">{form.requiredFieldsMessage}</p>

                <p className="mt-5">
                  <a
                    className="text-sebg-slate-800 group inline-flex items-center gap-x-2 rounded-md bg-[#ff0] px-3 py-2 text-sm font-medium focus:outline-none"
                    href="/"
                  >
                    {form.submitButtonText}
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
                        className="group inline-flex items-center gap-x-2 text-sm font-medium text-[#ff0] decoration-2 hover:underline focus:underline focus:outline-none"
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
