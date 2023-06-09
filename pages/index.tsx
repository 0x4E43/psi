import Contact from "@/components/contactUs";
import Content from "@/components/content";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PsiKnowLogix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className="flex-1">
          <NavBar/>
          <Hero/>
          <Features/>
          <Content/>
          <Contact/>
          <Footer/>
         </main>
    </div>
  );
}
