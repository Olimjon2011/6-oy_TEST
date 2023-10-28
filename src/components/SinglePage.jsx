import { useParams } from "react-router-dom"
import '../App.css'
import Header from "./OriginalPage/Header/Header";
import Footer from "./OriginalPage/Footer/Footer";
import { useGlobalContext } from "../context";

export default function SinglePage() {
  const {product, addToBasket} = useGlobalContext()
    const {id} = useParams();
    let singleProduct = product.find((item) => item.id === id)
  return (
    <div className="main">
        <Header />
        <div className="singleproduct">
          <img src={singleProduct.img} alt="singleproduct" />
          <h1>Продукт: {singleProduct.title}</h1>
          <h2>1штук = {singleProduct.price} so'm</h2>
          <h6>Страна производителя: Узбекистан</h6>
          <button onClick={() => addToBasket(id)}>В корзину</button>
        </div>
        <Footer />
    </div>
  )
}
