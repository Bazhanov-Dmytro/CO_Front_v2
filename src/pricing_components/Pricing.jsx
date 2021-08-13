import s from "./pricing.module.scss";
import Card from "./Card";
import CardLine from "./CardLine";
import Switcher from "./Switcher";
import { useState } from "react";

function Pricing(props) {
  const [currentCard, setCurrentCard] = useState(0);
  const [forseRerender, setForseRerender] = useState(false);

  let mode = false; // false(Card)/true(line)
  window.onresize = () => {
    if (!mode && window.innerWidth > 1050) {
      setForseRerender(true);
      mode = true;
    } else if (mode && window.innerWidth <= 1050) {
      setForseRerender(false);
      mode = false;
    }
  };

  const cardset_0 = [
    { header: "Basic", price: "$30", items: ["item 1", "item 2", "item 3"] },
    { header: "Basic", price: "$60", items: ["item 4", "item 5", "item 6"] },
    { header: "Basic", price: "$90", items: ["item 4", "item 5", "item 6"] },
    { header: "Basic", price: "$150", items: ["item 4", "item 5", "item 6"] },
    { header: "Basic", price: "$225", items: ["item 4", "item 5", "item 6"] },
  ];
  const cardset_1 = [
    {
      header: "Custom",
      price: "$500",
      items: ["user can do", "custom item", "here"],
    },
  ];

  const [cardset, setCardset] = useState(cardset_0);

  const moveCard = (direction) => {
    if (direction === "left" && currentCard > 0) {
      setCurrentCard((prev) => prev - 1);
    } else if (direction === "right" && currentCard < cardset.length - 1) {
      setCurrentCard((prev) => prev + 1);
    }
  };

  const generateCards = () => {
    // Creating card lines
    const lines = [];
    let cardsForLine = [];
    for (let i = 1; i <= cardset.length; i++) {
      cardsForLine.push(
        <Card
          header={cardset[i - 1]["header"]}
          price={cardset[i - 1]["price"]}
          items={cardset[i - 1]["items"]}
        />
      );
      if (i % 3 === 0 || i === cardset.length) {
        lines.push(cardsForLine);
        cardsForLine = [];
      }
    }
    // /Creating card lines

    return lines.map((line) => {
      return <CardLine line={line} />;
    });
  };

  const generateCard = (cardNum) => {
    const cardInfo = cardset[cardNum];

    return (
      <Card
        moveCard={moveCard}
        header={cardInfo["header"]}
        price={cardInfo["price"]}
        items={cardInfo["items"]}
      />
    );
  };

  return (
    <div className={s.pricing}>
      <h1>Kits and Pricing</h1>
      <h2>Choose kit suitable for you</h2>
      <Switcher
        setCard={setCurrentCard}
        setCardset={setCardset}
        cardsets={[cardset_0, cardset_1]}
      />
      {forseRerender}
      {window.innerWidth < 1050 ? generateCard(currentCard) : generateCards()}
    </div>
  );
}

export default Pricing;
