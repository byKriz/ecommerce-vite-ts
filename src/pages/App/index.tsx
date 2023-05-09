import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../../Routes";
import "./App.css";
import { Navbar } from "../../components/Navbar";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
