'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <header className="gradient-bg text-white">
      <div className="container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full bg-white shadow-lg mb-6 overflow-hidden">
          <Image
            src="/assets/profile.jpg"
            alt="Ashish Lamichhane"
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Ashish Lamichhane</h1>
        <h2 className="text-xl md:text-2xl font-light mb-6">Electrical & Electronics Engineer</h2>
        <div className="flex space-x-4">
          <Link href="#about" className="px-6 py-2 bg-white text-indigo-600 rounded-full font-medium hover:bg-gray-100 transition">
            About Me
          </Link>
          <Link href="#contact" className="px-6 py-2 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition">
            Contact
          </Link>
        </div>
      </div>
      <div className="section-divider"></div>
    </header>
  )
} 