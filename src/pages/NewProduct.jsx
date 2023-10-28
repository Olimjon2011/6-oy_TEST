import { useNavigate } from "react-router-dom";

export default function NewProduct({ product, removeItem }) {
    const navigate = useNavigate();
  return (
    <div className="main main__products-item" style={{paddingLeft: "116px",paddingRight:"116px",paddingTop: "50px", paddingBottom: "50px"}}>
      {product.map((item) => {
        const { id, title, price, img } = item;
        return (
          <div key={id}>
            <img src='https://picsum.photos/200/300' alt="product" />
            <h2>{title}</h2>
            <h3>{price}</h3>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <button onClick={() => navigate(`/single/${id}`)}>Информация</button>
            <button className="remove" onClick={() => removeItem(id)}>Удалить</button>
          </div>
        );
      })}
    </div>
  );
}
