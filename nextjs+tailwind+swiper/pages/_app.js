import Layout from "@/lib/layout";
import "@/styles/globals.css";
import clsx from "clsx";
import localFont from "next/font/local";

const neueHass = localFont({
  src: [
    {
      path: "../public/fonts/NeueHaasDisplay-Black.woff2",
      weight: "900",
      style: "bold",
      display: "swap",
    },
    {
      path: "../public/fonts/NeueHaasDisplay-Bold.woff2",
      weight: "700",
      style: "bold",
      display: "swap",
    },
    {
      path: "../public/fonts/NeueHaasDisplay-normal-500.woff2",
      weight: "500",
      style: "medium",
      display: "swap",
    },
    {
      path: "../public/fonts/NeueHaasDisplay-normal-400.woff2",
      weight: "400",
      style: "normal",
      display: "swap",
    },
    {
      path: "../public/fonts/NeueHaasDisplay-normal-400-Italic.woff2",
      weight: "400",
      style: "italic",
      display: "swap",
    },
    {
      path: "../public/fonts/NeueHaasDisplay-normal-300.woff2",
      weight: "300",
      style: "normal",
      display: "swap",
    },
  ],
  variable: "--font-neueHass",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={clsx(
        "text-neutral-50 bg-neutral-900 font-sans min-h-screen",
        neueHass.variable
      )}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
