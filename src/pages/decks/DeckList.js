import { useState, useEffect } from "react";
import { getAllDecks } from "../../api";
import { Link } from "react-router-dom";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { DefaultTransition } from "../../components/global/DefaultTransition";

export const DeckList = () => {
  const [deckList, setDeckList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAllDecks();
      setDeckList(response.data);
    })();
  }, []);

  return (
    <DefaultTransition>
    <div className="p-5">
      <h3 className="border-0 rounded-xl w-full text-center px-12 py-1 bg-secondary">Decks</h3>
      <div className="flex flex-row flex-wrap justify-center">
        {deckList.map((deck) => {
          return (
            <Link to={deck._id} key={deck._id} className="my-5 mx-2 grow lg:grow-0 w-[30%] h-60 lg:w-52 lg:h-auto">
              <Flippy
                flipOnHover={true}
                flipDirection="horizontal"
                className="lg:w-52 h-60 lg:h-80 card shadow-xl"
              >
                <FrontSide
                  className="card shadow-xl opacity-90"
                  style={{
                    backgroundImage: `url(..${deck.image})`,
                    padding: "0",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="card bg-primary opacity-40 h-full w-full absolute top-0 left-0"></div>
                  <div className="card-body items-center text-center justify-center text-black z-10">
                    <h3 className="card-title text-xl lg:text-2xl">{deck.name}</h3>
                  </div>
                </FrontSide>
                <BackSide className="" style={{ padding: "0" }}>
                  <div className="flex flex-col h-full bg-secondary opacity-80 p-5">
                    <p className="h-3/6 flex w-full justify-self-center rounded-lg bg-primary px-2 py-2">
                      <i className="text-center self-center">
                        {deck.description}
                      </i>
                    </p>
                    <div className="grow flex flex-col justify-end">
                      <div className="w-full text-center">
                        <p><b>Difficulty:</b></p> <p>{deck.difficulty}</p>
                      </div>
                      <div className="w-full text-center">
                        <p><b>Number of cards:</b></p><p> {deck.cards.length}</p>
                      </div>
                    </div>
                  </div>
                </BackSide>
              </Flippy>
            </Link>
          );
        })}
      </div>
    </div>
    </DefaultTransition>
  );
};
