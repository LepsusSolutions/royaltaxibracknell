import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import MUIThemeProvider from "@/config/theme/themeProvider"
import type { Metadata } from "next"
import '@/public/css/style.css'
import TopBar from "@/components/TopBar"
import Box from "@mui/material/Box"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Royal Taxi Bracknell",
  description: "Book your ride with Royal Executive Cars, the trusted taxi service in Bracknell. Available 24/7, we offer convenient online booking or call 01344 303 444.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-847641034"></Script>
      <Script src="/script.js" />
      <body >
        <MUIThemeProvider>
          <Box display={{ xs: 'none', md: 'block' }}>
            <TopBar />
          </Box>
          <NavBar />
          {children}
          <Footer />
        </MUIThemeProvider>
      </body>
    </html>
  );
}
