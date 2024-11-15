import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { PATHS_ENUM } from "./enums/paths-enum";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={PATHS_ENUM.HOME} />} />
        <Route path={PATHS_ENUM.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}
