
//import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Nav'
import Provider from './Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={`${inter.className} `} >
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>


    </html >
  )
}
