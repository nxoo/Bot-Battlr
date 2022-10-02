import React, {useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
    const [botCollection, setBotCollection] = useState([])

    fetch('http://localhost:8002/bots')
        .then(res => res.json())
        .then(data => setBotCollection(data))

    return (
        <div>
            <YourBotArmy  />
            <BotCollection botCollection={botCollection} />
        </div>
    )
}

export default BotsPage;
