import Header from "../components/OriginalPage/Header/Header";
import Footer from "../components/OriginalPage/Footer/Footer";
import Products from "../components/Products/Products";
import { useGlobalContext } from "../context";

export default function AllProducts() {
  const { goToAddCard } = useGlobalContext();
  return (
    <div>
      <Header goToAddCard={goToAddCard}/>
      <Products />
      <Footer/>
    </div>
  )
}