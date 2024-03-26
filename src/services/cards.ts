import axios from "axios";

const baseUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"

export const getCards = async () => {
    const resonse = await fetch(baseUrl);
    const cards = await resonse.json();
    return cards;
};

export const getCards2 = () => {
    const cards = fetch(baseUrl).then((res) => res.json());
    return cards;
}

export const getCards3 = () => {
    return axios.get(baseUrl);
}