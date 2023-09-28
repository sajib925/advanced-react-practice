import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import {ContextProvider} from "@/app/context/context";

const josfinSans = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React Practice With Next',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <body className={josfinSans.className}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>

    </html>
  )
}
