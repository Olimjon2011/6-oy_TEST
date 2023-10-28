import { useGlobalContext } from "../context";
import Footer from "./HomePage/Footer/Footer";
import Header from "./HomePage/Header/Header";
import Main from "./HomePage/Main/Main";

export default function Dashboard() {
  const { user } = useGlobalContext();
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }