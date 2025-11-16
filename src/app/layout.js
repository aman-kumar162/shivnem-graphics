import { ThemeProvider } from '../context/ThemeContext';
import { metadata } from './metadata';
import MouseTrail from '../components/shared/MouseTrail';
import Footer from '../components/layout/Footer';
import "./globals.css";
import "../styles/effects.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased min-h-screen transition-colors duration-300">
        <ThemeProvider>
          <div className="relative">
            <MouseTrail />
            <main className="edge-to-edge">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <div id="portal-root" />
      </body>
    </html>
  );
}
