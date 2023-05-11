import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../../Routes";
import { Navbar } from "../../components/Navbar";
import "./App.css";
import { ShoppingCartProvider } from "../../Context/ShoppingCartContext";

function App(): JSX.Element {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
