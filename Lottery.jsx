import React,{useState} from "react";
import "./Lottery.css" 
import { genTicket,sum } from "./helper";
export default function Lottery(){
    let [ticket,setTicket]=useState(genTicket(3));
    let isWinning=sum(ticket)===15;
    let regenTicket=()=>{
        setTicket(genTicket(3));
    }
    return(
        <div>
            
            <h2>Lottery Game!</h2>
            <div>
            <p>Ticket</p>
            <div className="ticket">
            
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
                
            </div>
            </div>
          <br></br>
            <button onClick={regenTicket}>Buy Ticket</button>
            <h3>{isWinning&& "Congratulations you won the Lottery!!!"}</h3>
        </div>
    );
}
