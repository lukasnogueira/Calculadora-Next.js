import './globals.css'

export const metadata = {
  title: 'Calculadora Next',
  description: 'Calculadora 100% digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <h1 className='text-center pt-6  bg-black text-white h-20'>Calculadora NextJs</h1>
        {children}
      </body>
    </html>
  )
}
