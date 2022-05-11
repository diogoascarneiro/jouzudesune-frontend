import { Transition } from "@headlessui/react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const DashboardCard = ({card, index, cardIsShowing}) => {

const starRating = () => {
  let stars = [];
  let j = 1;
  for (let i = 0; i < card.averageScore * 2; i++) {
    if (i === 0 && card.averageScore >= 0.5) {stars.push(<FaStarHalfAlt/>);}
    if (i > 0) {
      if (stars[i-j].type.name === "FaStarHalfAlt") {
        stars.pop();
        stars.push(<FaStar/>);
        j++;
      } 
      else stars.push(<FaStarHalfAlt/>)    
    }
  }
  for (let i = stars.length; i < 4; i++) {
    stars.push(<FaRegStar/>);
  }
  return stars;
}

let meaningCapitalized = card.cardId.wordMeanings.charAt(0).toUpperCase() + card.cardId.wordMeanings.slice(1);


  return (
    <Transition
    appear={true}
    show={cardIsShowing}
    enter="transition-opacity duration-1000"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-1000"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    className="w-52 lg:w-[17.5%]"
  >
    <Flippy
      flipOnHover={true}
      flipDirection="horizontal"
      className="h-80 lg:h-96 card m-4 shadow-xl"
      key={index}
    >
      <FrontSide
        className="card shadow-xl opacity-90 border"
        style={{
          backgroundImage: "url(../img/decks/default.jpg)",
          padding: "0",
        }}
      >
        <div className="card-body items-center text-center justify-center text-black">
          <h3 className="card-title text-5xl lg:text-6xl">
            {card.cardId.questionWord}
          </h3>
        </div>
      </FrontSide>
      <BackSide
        className="card shadow-xl border"
        style={{ padding: "0" }}
      >
        <div className="card-body bg-secondary items-center text-center justify-between">
          <p className="grow-0 text-2xl lg:text-3xl">
            {card.cardId.wordInKana}
          </p>
          <p className="grow-0 text-3xl lg:text-4xl">
            {meaningCapitalized}
          </p>
          <p className="grow-0 lg:text-xl">
            <b>Times seen: </b>
            {card.timesSeen}
          </p>
          <div className="grow-0 lg:text-xl">
            <b>Average score: </b>
            <div className="flex justify-center">{starRating()}</div>
          ({card.averageScore.toFixed(2)})
          </div>
         
        </div>
      </BackSide>
    </Flippy>
  </Transition>
  )
}
