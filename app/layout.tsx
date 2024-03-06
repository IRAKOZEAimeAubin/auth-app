import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import {SessionProvider} from 'next-auth/react'
import {auth} from '@/auth'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const montserrat = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Auth App',
  description: 'Authentication app using nextauth',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang='en'>
        <body className={montserrat.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
