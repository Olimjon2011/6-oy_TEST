import { Route, Routes,} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Favourites from "./pages/Favourites";
import Basket from "./pages/Basket";
import Error from "./pages/Error";
import AddCard from "./components/AddCard";
import SinglePage from "./components/SinglePage";
import ProtectRoute from "./components/ProtectRoute";
import Dashboard from "./components/Dashboard";
import { useGlobalContext } from "./context";
import LogIn from "./pages/LogIn";

function App() {

  const {
    user

  } = useGlobalContext();
  
  return (
    <>
      <Routes>
        <Route path="/" element={user && <Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<LogIn />}/>
        <Route path="/single/:id" element={<SinglePage  />} />
        <Route path="/addcard" element={<AddCard />}/>
        <Route path="/home" element={
            <ProtectRoute>
              <Dashboard />
            </ProtectRoute>
          } />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;