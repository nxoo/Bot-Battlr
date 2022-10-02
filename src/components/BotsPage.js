import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
    const [botCollection, setBotCollection] = useState([])
    const [botArmy, setBotArmy] = useState([])

    useEffect(() => {
        fetch('http://localhost:8002/bots')
            .then(res => res.json())
            .then(data => setBotCollection(data))
    }, [])

    function addRemoveBot(bot, army) {
        // army === true if bot in botArmy
        if (!botArmy.includes(bot)) {
            setBotArmy(botArmy => [...botArmy, bot])
        } else if (botArmy.includes(bot) && army) {
            setBotArmy(botArmy.filter(({id}) => id !== bot.id));
        }
    }

    return (
        <div>
            <YourBotArmy botArmy={botArmy} addRemoveBot={addRemoveBot}/>
            <BotCollection botCollection={botCollection} addRemoveBot={addRemoveBot}/>
        </div>
    )
}

export default BotsPage;
