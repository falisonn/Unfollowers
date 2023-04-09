import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Layout } from "./layouts/layout";
import { Unfollowers } from "./pages/unfollowers/unfollowers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/unfollowers" element={<Unfollowers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
