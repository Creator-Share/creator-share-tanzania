'use client'

import Link from 'next/link'
import Image from 'next/image'

type ChildCardProps = {
  child: {
    id: string
    name: string
    age: number
    location: string
    image_url: string
  }
}

export function ChildCard({ child }: ChildCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={child.image_url}
          alt={`${child.name}'s profile`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{child.name}</h3>
        <p className="text-gray-600">{child.age} years old</p>
        <p className="text-gray-500 text-sm">{child.location}</p>
        <Link
          href={`/sponsor-a-child/${child.id}`}
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Sponsor
        </Link>
      </div>
    </div>
  )
}
