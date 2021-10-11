import Head from "next/head";
import Header from "./components/Header";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hulu Next</title>
        <meta name="description" content="Hulu next build" />
      </Head>

      <main>
        <Header />

        <Nav />
      </main>

      <footer></footer>
    </div>
  );
}
