import "@/app/globals.css";
import { DM_Sans } from "next/font/google";


export const fontSans = DM_Sans({ variable: "--font-sans" });

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={fontSans.className}>{children}</body>
    </html>
  );
}
