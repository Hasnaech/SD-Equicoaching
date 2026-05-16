import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  metadataBase: new URL('https://sd-equicoaching.fr'),
  title: {
    default: 'SD Équicoaching — Neurosciences, Management & Équicoaching | Paris Île-de-France',
    template: '%s | SD Équicoaching',
  },
  description: 'Formations en neurosciences, management et équicoaching pour dirigeants, managers et équipes. Accompagnement individuel et intra-entreprise en Île-de-France (Paris, Essonne 91).',
  keywords: ['équicoaching', 'neurosciences', 'management', 'coaching', 'formation', 'Paris', 'Île-de-France', 'Essonne', 'team building'],
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
