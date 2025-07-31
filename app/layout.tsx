import "../global.css";
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import dynamic from 'next/dynamic';

// Dynamically import heavy components with proper typing
const BackgroundWrapper = dynamic<{}>(
  () => import("../components/BackgroundWrapper").then(mod => {
    const Component = mod.default || mod;
    return Component as React.ComponentType<{}>;
  }),
  {
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-black -z-10" />
  }
);

// Import Footer directly since it's not a default export
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://darshtech.dev'),
  title: {
    default: "darshtech.com",
    template: "%s | darshtech.com",
  },
  description: "Personal website of Darsh Tech",
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    title: "darshtech.com",
    description: "Personal website of Darsh Tech",
    url: "https://darshtech.dev",
    siteName: "darshtech.dev",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: 'Darsh Tech - Personal Website',
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Darsh Tech",
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicon_io/favicon.ico' },
    ],
  },
};
// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
  display: 'swap',
  preload: true,
});

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`relative min-h-screen bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }`}
        suppressHydrationWarning
      >
        <BackgroundWrapper />
        <div className="relative z-10 flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
