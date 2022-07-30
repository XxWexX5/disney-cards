import type { NextPage } from "next";
import Head from "next/head";

import { Form } from "../components/Form";

import styled from "../styles/home.module.scss";

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

      <main className={styled.containerHome}>
        <Form
          textField={{
            label: { htmlFor: "username", value: "Digite o seu nome:" },
            input: {
              type: "text",
              placeholder: "Preencha com o seu nome",
              id: "username",
            },
          }}
          button={{
            value: "ver cartas",
            type: "submit",
          }}
        />
      </main>
    </>
  );
};

export default Home;
