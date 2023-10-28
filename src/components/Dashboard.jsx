import { useGlobalContext } from "../context";
import Footer from "./HomePage/Footer/Footer";
import Header from "./HomePage/Header/Header";
import Main from "./HomePage/Main/Main";

export default function Dashboard({goToAddCard}) {
  const { user } = useGlobalContext();
    return (
      <div>
        <Header goToAddCard={goToAddCard}/>
        <Main />
        <Footer />
      </div>
    )
  }