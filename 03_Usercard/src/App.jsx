import Usercard from "./assets/Componenets/Usercard"
import Ravi from "./assets/images/Ravi.jpg"
import Bhagat from "./assets/images/Bhagat Singh.jpg"
import Maharana from "./assets/images/Maharana Pratap.jpeg"

function App() {
  return (
    <div className="Container">
      <Usercard name="Ravi Kumar Paswan" desc="Disc 1" image={Ravi} style={{"border-radius":"40px"}}/>
      <Usercard name="Bhagat Singh" desc="Disc 2" image={Bhagat} style={{"border-radius":"40px"}}/>
      <Usercard name="PrithiviRaj Chauhan" desc="Disc 3" image={Maharana} style={{"border-radius":"40px"}}/>
    </div>
  )
}

export default App
