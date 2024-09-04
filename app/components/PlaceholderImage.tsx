import React from "react"

interface PlaceholderImageProps {
  data: { src: string; alt: string }
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ data }) => {
  return (
    <section className="mx-auto max-w-6xl p-4 pt-2 md:p-12">
      <img src={data.src} alt={data.alt} className="flex h-auto w-full items-center justify-center rounded-md bg-gray-300 text-4xl font-bold" />
    </section>
  )
}

export default PlaceholderImage
