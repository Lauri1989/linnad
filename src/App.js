import logo from './logo.svg';
import './linnad.css';
import Linn from './Linn';
import pilt1 from './pildid/pilt1.jpg';
import book from './pildid/book.jpg';

function App() {
  return (
    <div className="container">
      <h1> Minu raamatute loend!</h1>
      <Linn name="Kevade" riik="Oskar Luts" imgSrc="pildid/book.jpg" />
      <Linn name="Aatomharjumused" riik="James Clear" imgSrc="pildid/book.jpg" />
      <Linn name="Nullpäev" riik="Ruth Ware" imgSrc="pildid/book.jpg" />
    </div>
  )
}
export default App;

