import { useGlobalContext } from "../context";
import NewProduct from "../pages/NewProduct";
import Footer from "./HomePage/Footer/Footer";
import Header from "./HomePage/Header/Header";
import './Products/Products.css'

export default function AddCard() {
  const {
    name,
    setName,
    price,
    setPrice,
    handleSubmitSecond,
    product,
    removeItem
  } = useGlobalContext()
  return (
    <div>
        <Header />
        <div className="main" style={{paddingTop: "40px"}}>
        <form  style={{paddingLeft: "116px",paddingRight:"116px"}} action="" onSubmit={handleSubmitSecond}>
            <input placeholder="Название" type="text" name="title" value={name} onChange={(e) => setName(e.target.value)}  id="" />
            <br />
            <input placeholder="Стоимость(UZS)" type="text" name="title" value={price} onChange={(e) => setPrice(e.target.value)}  id="" />
            <br />
            <button style={{cursor: 'pointer'}}>Добавить</button>
        </form>
        </div>
        <NewProduct product={product} removeItem={removeItem}/>
        <Footer/>
    </div>
  )
}
