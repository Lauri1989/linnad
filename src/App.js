import logo from './logo.svg';
import './linnad.css';
import Linn from './Linn';
import pilt1 from './pildid/pilt1.jpg';

function App() {
  return (
    <div className="container">
      <h1> Minu raamatute loend!</h1>
      <Linn name="Kevade" riik="Oskar Luts" imgSrc="pildid/pilt1.jpg" />
      <Linn name="Aatomharjumused" riik="James Clear" imgSrc="pildid/pilt2.jpg" />
      <Linn name="Nullpäev" riik="Ruth Ware" imgSrc="pildid/pilt3.jpg" />
    </div>
  )
}
export default App;

