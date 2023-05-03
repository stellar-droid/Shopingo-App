import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ProductList />} />
            <Route
              path="/product/:productId"
              exact
              element={<ProductDetail />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
