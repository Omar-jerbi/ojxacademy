import Navbar from './components/Navbar/Navbar'
import { UserContextProvider } from './contexts/userContext'
import './globals.css'
import i from './favicon.png'
import Image from 'next/image'


export const metadata = {
  title: "OJXacademy | Impara l'arte dello sviluppo web!",
  description: 'Con OJXacademy imparerai le pricipali tecnologie e tecniche di programmazione utilizzate per lo sviluppo web: Con corsi sia in gruppo che individuali, inizierai in poco tempo a creare i tuoi primi siti web per desktop e mobile!',
  icons: {
    icon: "/_next/static/media/favicon.1d647803.png",
    shortcut: "/_next/static/media/favicon.1d647803.png"
  },
  keywords: ["corso programmazione", 'corso sviluppo web', "corso sviluppo web", "programmazione", "html", "css", "cos'è un framework?"],
  authors: [{ name: "OmarJ", url: "https://github.com/Omar-jerbi" }],
  category: "sviluppo web",
  openGraph: {
    title: "OJXacademy",
    description: 'Con OJXacademy imparerai le pricipali tecnologie e tecniche di programmazione utilizzate per lo sviluppo web: Con corsi sia in gruppo che individuali, inizierai in poco tempo a creare i tuoi primi siti web per desktop e mobile!',
    url: "https://ojxacademy.com",
    siteName: "OJXacademy.com",
    type: "website",
    locale: "it-IT"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='text-white'>
        {/* FIX DEL CAZZO per forzare build la icon in static folder */}
        <Image src={i} alt='sss' className='hidden' height={0} width={0} />

        <UserContextProvider>
          <Navbar />

          <main>
            {children}
          </main>
        </UserContextProvider>

      </body>
    </html>
  )
}
