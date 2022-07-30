import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import api from "../services/api";

import { Tag } from "../components/Tag";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

import styled from "../styles/cards.module.scss";

interface charactereDisney {
  allies: [string];
  enemies: [string];
  films: [string];
  imageUrl: string;
  name: string;
  parkAttractions: [string];
  shortFilms: [string];
  tvShows: [string];
  url: string;
  videoGames: [string];
  _id: number;
}

const Cards: NextPage = () => {
  const [dataCharacters, setDataCharacters] = useState<charactereDisney[]>([]);
  const [showCardsUntil, setShowCardsUntil] = useState(5);

  async function getDisneyCharacters() {
    const {
      data: { data },
    } = await api.get("/");

    if (data) {
      processingResponse(data);
    }
  }

  function processingResponse(data: charactereDisney[]) {
    data.map((character: charactereDisney, position: number) => {
      if (position < 8) {
        setDataCharacters((prev) => [...prev, character]);
      }
    });
  }

  function getMainTitle({
    allies,
    enemies,
    films,
    parkAttractions,
    shortFilms,
    tvShows,
    videoGames,
    name,
  }: charactereDisney) {
    if (allies.length > 0) {
      return allies[0];
    }

    if (enemies.length > 0) {
      return enemies[0];
    }

    if (films.length > 0) {
      return films[0];
    }

    if (parkAttractions.length > 0) {
      return parkAttractions[0];
    }

    if (shortFilms.length > 0) {
      return shortFilms[0];
    }

    if (tvShows.length > 0) {
      return tvShows[0];
    }

    if (videoGames.length > 0) {
      return videoGames[0];
    }

    return name;
  }

  function handleMoreCarts() {
    console.log("Akiii");
  }

  useEffect(() => {
    getDisneyCharacters();
  }, []);

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
            {dataCharacters.map(
              (characterDisney: charactereDisney, position: number) => {
                if (position < showCardsUntil) {
                  return (
                    <Card
                      key={characterDisney["_id"]}
                      mainTitle={getMainTitle(characterDisney)}
                      number="8"
                      title={characterDisney.name}
                      imageUrl={characterDisney.imageUrl}
                      color="orange"
                    />
                  );
                }
              }
            )}
          </div>

          <div className={styled.wrapperButtons}>
            <Button value="RANDOMIZE" type="button" />
            <Button
              value="MAIS CARTAS"
              type="button"
              handleMoreCarts={handleMoreCarts()}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Cards;
