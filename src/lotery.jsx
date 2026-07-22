import { useState } from "react"
import { genNumber } from "./support";
import Ticket from "./ticket";
import './style.css'

export default function Lotery({n, winCondition}) {

    let [ticket, setTicket] = useState(genNumber(n));

    let isWinTicket = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genNumber(n));
    }

    return(
        <div className="outerComponent">
            <h1>Lottery Game!</h1>
            
            <Ticket ticket={ticket}/>

            <button onClick={buyTicket}>Generate New Ticket</button>

            <h2>{isWinTicket && "Congratulations! You Won A Lottery!"}</h2>
        </div>
    )
}