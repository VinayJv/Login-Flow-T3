import "~/styles/globals.css";
import styles from ".././app/index.module.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Header } from "./_components/Header";
import { GlobalContextWrapper } from "./context/globalContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecommerce",
  description: "Login Flow for Ecommerce Web App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TRPCReactProvider>
          <GlobalContextWrapper>
            <main className={styles.main}>
              <Header />
              <div className={styles.contentPage}>
                {children}
              </div>
            </main>
          </GlobalContextWrapper>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
