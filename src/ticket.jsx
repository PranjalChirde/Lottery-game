import TicketNum from "./ticketNum"
import './style.css'

export default function Ticket({ticket}) {
    return(
        <>
            <div className="innerComponent">
                <h1>Ticket</h1>
                <div className="ticket">
                    {
                        ticket.map((num, idx) => (
                            <TicketNum num={num} key={idx}/>
                        ))
                    }
                </div>
            </div>
        </>    
    )
}