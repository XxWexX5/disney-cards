import type { NextPage } from "next";
import Head from "next/head";

import { FaBeer } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Disney Cards</title>
        <meta
          name="description"
          content="Disney Cards! Conhecendo alguns dos personagens mais amados pelos fãs da disney."
        />
        <meta property="og:title" content="Disney Cards" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/images/icon-castle.png" />
        <meta property="og:url" content="https://disney-cards.vercel.app" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main>
        <h1>Hello World!</h1>
        <FaBeer />
      </main>
    </>
  );
};

export default Home;
