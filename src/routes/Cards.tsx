import { useEffect, useState } from "react";
import { CardType } from "../@types/types";
import { getCards } from "../services/cards";
import Spinners from "../components/Spinners/Spinners";


const Cards = () => {
    const [cards, setCards] = useState<CardType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>();

    //SRP:
    useEffect(() => {
        setError(null);
        setLoading(true);
        getCards()
            .then((res) => {
                setCards(res.data);
                setError(null);
            })
            .catch((e) => {
                setError("Network error");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            {loading && <Spinners />}
            {error && <div>{error}</div>}
        </div>)
};
export default Cards;