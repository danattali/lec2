import { useEffect, useState } from "react";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards")
            .then((res) => res.json())
            .then((json) => {
                setCards(json);
                console.log(json)
            });
    }, []);
    return (
        <div>
            {cards.map((c) => (
                <div>{ }</div>
            ))}
        </div>
    );
};

export default Cards;