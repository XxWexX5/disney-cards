import type { NextPage } from "next";
import Head from "next/head";

import { Form } from "../components/Form";
import { Tag } from "../components/Tag";
import { Card } from "../components/Card";

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

        <Tag value="Seja bem vindo," />

        <Card
          mainTitle="Gravity Falls"
          number="8"
          title="9-Eye"
          color="orange"
        />
      </main>
    </>
  );
};

export default Home;
