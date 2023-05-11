import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../../Routes";
import { Navbar } from "../../components/Navbar";
import "./App.css";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
