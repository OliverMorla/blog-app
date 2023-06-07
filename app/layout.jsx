import { GlobalProvider } from './context/GlobalContext'
import { Montserrat } from "next/font/google"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './globals.css'

const MontserratFont = Montserrat({
  subsets: ['latin'],
  style: 'normal',
  weight: '400'
})

export const metadata = {
  title: `Blog App - Home`,
  description: 'Blog Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={MontserratFont.className}>
        <GlobalProvider>
          <Header />
          {children}
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  )
}
