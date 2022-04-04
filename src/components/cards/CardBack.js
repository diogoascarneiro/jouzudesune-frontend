import React from 'react';
import { useState, useEffect } from 'react';
import { getCard } from '../../api';

export const CardBack = () => {

  const [card, setCard] = useState({});

  useEffect(() => {
   ( async () => {
     const response = await getCard("624851d578c8ecd2aa72f2a8");
     setCard(response.data);
 })()
  }, []);

  return (
    <div>
    <h1>{card.questionWord}</h1>
    <p>{card.wordWithFurigana}</p>
    <p>{card.wordInKana}</p>
    <p>{card.wordMeanings}</p>
    <p>{card.wordAudio}</p>
    <p>{card.exampleSentence}</p>
    <p>{card.exampleWithFurigana}</p>
    <p>{card.exampleInKana}</p>
    <p>{card.exampleTranslation}</p>
    <p>{card.exampleAudio}</p>
    </div>
  )
}
