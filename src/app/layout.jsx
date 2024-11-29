import "./globals.css";
import Navigation from "./components/Navigation/Navigation";

export const metadata = {
  title: "Copilot System",
  description: "Genera TAG, filtra TAG, Industria 4.0",
  lang: "es"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="mx-auto w-screen">

        <Navigation />


        <div className="mx-5 mt-10">
          {children}
        </div>

      </body>
    </html>
  );
}
