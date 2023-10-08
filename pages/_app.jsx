import { Arimo } from "next/font/google";
import "../styles/globals.css";
import Layout from "@/components/layout/Layout";

const roboto = Arimo({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
