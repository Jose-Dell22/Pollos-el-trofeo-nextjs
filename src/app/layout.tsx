import{Roboto_Mono}from 'next/font/google'
import { Header } from "./Components/shared/Header";
import { Footer } from "./Components/shared/Footer/index";
import "./globals.scss";


const roboto= Roboto_Mono({
  weight: ["100","300","500","700"],
  subsets:["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('Hola mundo layout')
  return (
    <html lang="en">
      
      <body className={roboto.className}>
      <Header/>
      {children}
      <Footer/>
      </body>
  
    </html>
  );
}
