import React from 'react'

const Cards = () => {
    fetch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards")
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
        })
    return (
        <div>Cards</div>
    )
}

export default Cards