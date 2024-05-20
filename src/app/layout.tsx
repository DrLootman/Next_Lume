import type { Metadata } from 'next';
import { Noto_Serif } from 'next/font/google';
import '../styles/style.scss';
import Footer from '@/components/globals/Footer';
import NavBar from '@/components/globals/NavBar';
import Head from 'next/head';

const noto = Noto_Serif({
  weight: ["200", '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: `Atelier Lume - Décoration et révélation d'intérieur`,
    template: '%s - Atelier Lume'
  },
  metadataBase: new URL("https://atelier-lume.vercel.app"),
  description: `Le site Atelier Lume recense les créations de Camille Bernardini, décoratrice d'intérieur diplômée ; de même qu'il permet de la contacter et de prendre rendez-vous`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" fetchPriority="high" href="/curtain.jpg" type="image/jpg" />
      </Head>
      <body className={noto.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
