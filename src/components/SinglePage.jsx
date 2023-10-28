import { useParams } from "react-router-dom"
import '../App.css'
import Header from "./HomePage/Header/Header";
import Footer from "./HomePage/Footer/Footer";
import { useGlobalContext } from "../context";
export default function SinglePage() {
  const {product, addToBasket} = useGlobalContext()
    const {id} = useParams();
    let singleProduct = product.find((item) => item.id === id)
  return (
    <div className="main">
        <Header/>
        <div className="singleproduct">
          <img src={singleProduct.img} alt="singleproduct" />
          <h1>O'zbekistonda ishlab chiqarilgan</h1>
          <h2>{singleProduct.title}</h2>
          <h3>1dona = {singleProduct.price} so'm</h3>
          <button onClick={() => addToBasket(id)}>Корзина</button>
        </div>
        <Footer/>
    </div>
  )
}
