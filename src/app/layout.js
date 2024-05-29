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
    image: "https://gokul-krishnan.vercel.app/hero.png",
    description: "Portfolio website of Gokul Krishnan.",
    locale: "en_US",
  },
};


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="bg-backgroundbkLight">
        <Layout>
  
      
      {children}
      
      </Layout>
      </body>
    </html>
  );
}
