import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    metadataBase: new URL('https://pablo-marte.com/'),
    title: 'Pablo Marte | Official Website',
    description: 'Official website of Pablo Marte. Mexican musician.',
    applicationName: 'Pablo Marte | PWA',
    referrer: 'origin-when-cross-origin',
    apple: '/assets/icons/apple-touch-icon.png',
    keywords: ['Pablo Marte, Artista, Artista Musical, Cantante, Musico, Compositor Mexicano, Compositor, Pablo, Marte, Productor, Tiempo de Querer, Nightingale, Petricor, Luminiscencia, Paisaje, Lena al fuego'],
    authors: [{name: 'G0rz', url: 'https://leonardobecerril.dev/'}],
    creator: 'G0rz',
    icons: {
        icon: '/assets/icons/android-chrome-512x512.png', apple: '/assets/icons/apple-touch-icon.png',
    },
    manifest: '/manifest.json',
    openGraph: {
        title: 'Pablo Marte | Official Website',
        description: 'Official website of Pablo Marte. Mexican musician.',
        url: 'https://pablo-marte.com/',
        siteName: 'Pablo Marte | Official Website',
        images: '/assets/icons/android-chrome-512x512.png',
        locale: 'en_MX',
        type: 'website',
        authors: ['G0rz'],
    },
    robots: {
        index: true, follow: false, nocache: true, googleBot: {
            index: true, follow: true,
        },
    },
    twitter: {
        card: 'summary',
        title: 'Pablo Marte | Official Website',
        description: 'Official website of Pablo Marte. Mexican musician.',
        creator: '@XDeathZero',
        image: ['https://pablo-marte.com/assets/icons/android-chrome-512x512.png'],
    },
    verification: {
        google: 'google',
    },

    category: 'music'
}

export default function RootLayout({children}) {

    return (<html lang={'es'}>
    <body className={inter.className}>
    <Providers>
        <main className={'text-foreground bg-background relative'}>
            {children}
        </main>
    </Providers>
    </body>
    </html>);
}
