import "../components/HomePage/Main/Main.css";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function LogIn() {
  const { setUser } = useGlobalContext();
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;
    setUser({ name: name });
    navigate("/home");
  };
  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit} action="">
        <h3>Войти</h3>
        <input
          type="text"
          name="username..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите своё имя"
        />
        <button>Войти</button>
      </form>
    </div>
  );
}
