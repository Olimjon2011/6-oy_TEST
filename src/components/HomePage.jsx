import { useGlobalContext } from "../context";
import Footer from "./OriginalPage/Footer/Footer";
import Header from "./OriginalPage/Header/Header";
import Main from "./OriginalPage/forHomePage/forHomePage";

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