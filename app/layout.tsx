import Navbar from './components/Navbar/Navbar'
import { UserContextProvider } from './contexts/userContext'
import './globals.css'

export const metadata = {
  title: 'OJXacademy.com',
  description: 'Con OJXacademy imparerai le pricipali tecnologie e tecniche di programmazione utilizzate per lo sviluppo web: Con corsi sia in gruppo che individuali, inizierai in poco tempo a creare i tuoi primi siti web per desktop e mobile!',
  icons: {
    icon: "/icon.png"
  },
  keywords: ["ojxacademy", 'sviluppo web', "corso sviluppo web", "javascript", "programmazione", "html", "css", "react"],
  authors: [{name: "OJ", url: "https://github.com/Omar-jerbi"}]  ,
  category: "sviluppo web"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className='text-white'>

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
