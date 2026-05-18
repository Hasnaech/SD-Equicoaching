import './globals.css'
import SmoothScroll from '../components/SmoothScroll'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  metadataBase: new URL('https://sd-equicoaching.fr'),
  title: {
    default: 'Cabinet Conseil Performance Managériale Paris | SD Équicoaching',
    template: '%s | SD Équicoaching',
  },
  description: 'SD Équicoaching — Manager de Transition, neurosciences comportementales et équicoaching pour dirigeants et comités de direction. Certification Qualiopi. Partout en France.',
  keywords: ['performance managériale', 'neurosciences management', 'équicoaching', 'leadership', 'formation managers', 'Paris', 'Île-de-France'],
  authors: [{ name: 'SD Équicoaching' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'SD Équicoaching',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
