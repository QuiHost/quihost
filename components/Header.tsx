'use client'

import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Turno
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
            <Link
              href="/login" 
              className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header 