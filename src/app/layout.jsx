import "./globals.css";
import Navigation from "./components/Navigation/Navigation";

export const metadata = {
  title: "System Copilot",
  description: "Genera TAG, filtra TAG, Industria 4.0",
  lang: "es"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="container mx-auto w-screen">
        
          <Navigation />

          {children}
       
      </body>
    </html>
  );
}
