import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import api from "../services/api";

import { Tag } from "../components/Tag";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

import styled from "../styles/cards.module.scss";

const Cards: NextPage = () => {
  const [responseAPI, setResponseAPI] = useState([]);

  async function getDisneyCharacters() {
    const { data } = await api.get("/");

    setResponseAPI(data);
  }

  useEffect(() => {
    getDisneyCharacters();
  }, []);

  console.log(responseAPI);

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

      <main className={styled.containerCards}>
        <div className={styled.wrapperContent}>
          <Tag value="Seja bem vindo," />

          <div className={styled.wrapperCards}>
            <Card
              mainTitle="Gravity Falls"
              number="8"
              title="9-Eye"
              color="orange"
            />

            <Card
              mainTitle="Gravity Falls"
              number="8"
              title="9-Eye"
              color="orange"
            />

            <Card
              mainTitle="Gravity Falls"
              number="8"
              title="9-Eye"
              color="orange"
            />

            <Card
              mainTitle="Gravity Falls"
              number="8"
              title="9-Eye"
              color="orange"
            />

            <Card
              mainTitle="Gravity Falls"
              number="8"
              title="9-Eye"
              color="orange"
            />

            <Card
              mainTitle="Gravity Falls"
              number="8"
              title="9-Eye"
              color="orange"
            />

            <Card
              mainTitle="Gravity Falls"
              number="8"
              title="9-Eye"
              color="orange"
            />
          </div>

          <div className={styled.wrapperButtons}>
            <Button value="RANDOMIZE" type="button" />
            <Button value="MAIS CARTAS" type="button" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Cards;
