import "./Products.css";

export default function Products({goToaddCard}) {
  return (
    <main className="main">
      <div className="main__products">
        <h2>Все продукты</h2>
        <div className="main__products-item">
          <div>
            <img src='./src/assets/products-img-1.png' alt="product" />
            <b>44,50 ₽</b>
            <p>
              Г/Ц Блинчики с мясом вес, <br /> Россия 
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            <img src='./src/assets/products-img-2.png' alt="product" />
            <b>44,50 ₽</b>
            <p>
              Молоко ПРОСТОКВАШИНО паст. <br /> питьевое цельное отборное ...
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            <img src='./src/assets/products-img-3.png' alt="product" />
            <b>44,50 ₽</b>
            <p>
              Молоко сгущенное РОГАЧЕВ <br /> Егорка, цельное с сахаром...
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            <img src='./src/assets/products-img-4.png' alt="product" />
            <b>44,50 ₽</b>
            <p>
              Комбайн КЗС-1218 <br /> «ДЕСНА-ПОЛЕСЬЕ GS12»
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            <img src='./src/assets/products-img-5.png' alt="product" />
            <b>599,99 ₽</b>
            <p>
              Молоко ПРОСТОКВАШИНО паст. <br /> питьевое цельное отборное ...
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            <img src='./src/assets/products-img-4.png' alt="product" />
            <b>44,50 ₽</b>
            <p>
              Молоко сгущенное РОГАЧЕВ <br /> Егорка, цельное с сахаром...
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            <img src='./src/assets/products-img-4.png' alt="product" />
            <b>159,99 ₽</b>
            <p>
              Молоко ПРОСТОКВАШИНО паст. <br /> питьевое цельное отборное ...
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
          <div>
            <img src='./src/assets/products-img-2.png' alt="product" />
            <b>49,39 ₽</b>
            <p>
              Молоко сгущенное РОГАЧЕВ <br /> Егорка, цельное с сахаром...
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <button>В корзину</button>
          </div>
        </div>
      </div>
    </main>
  );
}
