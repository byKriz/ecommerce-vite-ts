import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../../Routes";
import "./App.css";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
