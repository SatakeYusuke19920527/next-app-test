import { Inter } from 'next/font/google'
import React from 'react'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Login',
  description: 'Login Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <div className={inter.className}>{children}</div>
    </main>
  )
}
