import { ThemeProvider } from '../context/ThemeContext';
import { metadata } from './metadata';
import MouseTrail from '../components/shared/MouseTrail';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import { Space_Grotesk, Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";
import "../styles/effects.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth ${spaceGrotesk.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen transition-colors duration-300 font-sans">
        <ThemeProvider>
          <div className="relative">
            <MouseTrail />
            <Navbar />
            <main className="edge-to-edge">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <div id="portal-root" />
      </body>
    </html>
  );
}
