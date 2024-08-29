//page.js
import '../styles/global.css'

export const metadata = {
  title: 'Book Catalog',
  description: 'A simple book catalog app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container mx-auto mt-8">{children}</main>
      </body>
    </html>
  )
}
