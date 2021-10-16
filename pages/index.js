import Head from "next/head";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Nav from "./components/Nav";
import requests from "./utils/requests";

export default function Home({ results }) {
  return (
    <div className="container">
      <Head>
        <title>Hulu Next</title>
        <meta name="description" content="Hulu next build" />
      </Head>

      <main>
        <Header />

        <Nav />

        <Movies results={results} />
      </main>

      <footer></footer>
    </div>
  );
}

// Getting server side props
// This gets called on every request
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  // Fetch data from external API
  const res = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { results: data.results } };
}
