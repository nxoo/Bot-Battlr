import React, {useState} from "react";
import BotCard from "./BotCard";

function BotCollection({botCollection, addRemoveBot}) {

    return (
        <div className="ui four column grid">
            <div className="row">
                {botCollection.map(bot => (
                    <BotCard key={bot.id} bot={bot} addRemoveBot={addRemoveBot} army={false} />
                ))}
            </div>
        </div>
    );
}

export default BotCollection;
