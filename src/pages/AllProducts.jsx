import Footer from "../components/HomePage/Footer/Footer";
import Header from "../components/HomePage/Header/Header";
import Products from "../components/Products/Products";
import { useGlobalContext } from "../context";

export default function AllProducts() {
  const { goToAddCard } = useGlobalContext();
  return (
    <div>
      <Header/>
      <Products />
      <Footer/>
    </div>
  )
}