import Footer from "../components/HomePage/Footer/Footer";
import Header from "../components/HomePage/Header/Header";
import '../App.css'
import { useGlobalContext } from "../context";

export default function Basket() {
  const { basket } = useGlobalContext()
  return (
    <div>
      <Header/>
      <div className="basket main">
        <h2>Чтобы добавить нажмите на кнопку "В корзину"</h2>
        {basket.map((item) => {
          const { id, title, price } = item;
          return (
            <div key={id}>
              <h3>{title}: {price} so'm</h3>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
