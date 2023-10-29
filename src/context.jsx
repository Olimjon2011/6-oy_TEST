import { createContext, useContext, useEffect, useState } from "react";
import getStore from "./utils/Get";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const navigate = useNavigate();
    const id = uid();
    const img = './src/assets/products-img-1';
    
    const [user, setUser] = useState("");
    const [product, setProduct] = useState(getStore("products"));
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [basket, setBasket] = useState(getStore("basket"));
    const [users, setUsers] = useState(getStore("users"));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user) {
          alert("Ничего не написано");
        } else {
          const newItem = { id: id, name: user };
          setUsers([...users, newItem]);
          navigate('/home')
          setUser('');
        }
    };
    const handleSubmitSecond = (e) => {
        e.preventDefault();
        if (name && price) {
          const newItem = { id: id, title: name, price: price, img: img };
          setProduct([...product, newItem]);
          setName("");
          setPrice("");
        } else {
          alert("error");
        }
    };
    const removeItem = (id) => {
        const newitem = product.filter((item) => item.id !== id);
        setProduct(newitem);
      };
      const addToBasket = (id) => {
        const newItem = product.find((item) => item.id === id);
        setBasket([...basket, newItem]);
      };
      function goToAddCard() {
        navigate("/addcard");
        console.log(12345);
      }
    
      useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("products", JSON.stringify(product));
        localStorage.setItem("basket", JSON.stringify(basket));
      }, [users, product, basket]);

    return <AppContext.Provider value={{
        user,
        setUser,
        product,
        setProduct,
        name,
        setName,
        price,
        setPrice,
        basket,
        setBasket,
        users,
        setUsers,
        handleSubmit,
        handleSubmitSecond,
        removeItem,
        addToBasket,
        goToAddCard
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext };

