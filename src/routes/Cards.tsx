import { useEffect, useState } from "react";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards")
            .then((res) => res.json())
            .then((json) => {
                setCards(json);
            });
    }, []);
    return <div>Cards</div>;
};

export default Cards;