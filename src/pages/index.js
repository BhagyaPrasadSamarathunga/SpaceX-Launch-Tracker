import { Titillium_Web } from "next/font/google";

// component imports
import Head from "next/head";
import HomePage from "./homePage/HomePage";
import Header from "@/components/header/Header"

const titillium = Titillium_Web({ subsets: ["latin"], weight: "600" });

export default function Home() {

  return (
    <>
      <Head>
        <title>Space X Launch</title>
        <meta name='description' content='space x monitor' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
			<HomePage />
    </>
  );
}