import type { NextPage } from "next";
import Head from "next/head";

import { Tag } from "../components/Tag";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

import styled from "../styles/cards.module.scss";

const Cards: NextPage = () => {
  return (
    <>
      <Head>
        <title>Disney Cards - Cards</title>
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
