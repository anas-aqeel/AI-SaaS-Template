import React from "react"

interface PlaceholderImageProps {
  data: { dimensions: string }
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ data }) => {
  return (
    <section className="mx-auto max-w-6xl p-4 pt-2 md:p-12">
      <div className="flex h-[500px] items-center justify-center rounded-md bg-gray-300 text-4xl font-bold">
        {data.dimensions}
      </div>
    </section>
  )
}

export default PlaceholderImage
