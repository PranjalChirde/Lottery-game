import Lotery from "./lotery";
import { sum } from "./support";

let winCondition = (ticket) => {
  return sum(ticket) === 15;
}

function App() {
  return (
    <>
      <Lotery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
