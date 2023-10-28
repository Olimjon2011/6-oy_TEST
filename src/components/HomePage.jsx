import { useGlobalContext } from "../context";
import Footer from "./OriginalPage/Footer/Footer";
import Header from "./OriginalPage/Header/Header";
import Main from "./OriginalPage/Main/Main";

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