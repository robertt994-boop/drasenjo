export const metadata = {
  title: "Clínica Dr. Asenjo — Cirugía estética en Granada y Málaga",
  description: "Cirugía Plástica, Estética y Reparadora. Resultados naturales con seguridad y excelencia.",
};

import "./globals.css";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
