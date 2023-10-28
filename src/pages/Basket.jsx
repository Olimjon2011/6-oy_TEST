import Footer from "../components/HomePage/Footer/Footer";
import Header from "../components/HomePage/Header/Header";
import '../App.css'
import { useGlobalContext } from "../context";

export default function Basket({goToAddCard}) {
  const { basket } = useGlobalContext()
  return (
    <div>
      <Header goToAddCard={goToAddCard}/>
      <div className="basket main">
        <h2>Ничего нету</h2>
        {basket.map((item) => {
          const { id, title, price } = item;
          return (
            <div key={id}>
              <h3>{title}: {price} uzs</h3>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
