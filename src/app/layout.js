import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import "./globals.scss";
import Layout from "@/components/Layout";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio website of Gokul Krishnan",
  keywords: "Gokul Krishnan, portfolio, web developer, frontend developer, backend developer, full stack developer, projects, blog",
  author: "Gokul Krishnan",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  robots: "index, follow",
  openGraph: {
    title: "Portfolio of Gokul Krishnan",
    type: "website",
    url: "https://gokul-krishnan.vercel.app",
    images: "https://gokul-krishnan.vercel.app/goku.png",
    description: "Portfolio website of Gokul Krishnan.",
    locale: "en_US",
  },
};


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="bg-backgroundbkLight">
        <Layout>
  
        <SmoothScroll options={{
          duration:1,
          direction:'vertical',
          gestureDirection:'vertical',
          smoothWheel:true,
          smoothTouch:true,
          touchMultiplier:2,
          inifinite:false,
          easing:async(t)=>{
            'use server';
            Math.min(2,2.001 - Math.pow(2,-20*t));
          },
        }}>
      {children}
      </SmoothScroll >

      
      </Layout>
      </body>
    </html>
  );
}
