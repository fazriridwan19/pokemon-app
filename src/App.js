import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Homepage from "./pages/Homepage";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
