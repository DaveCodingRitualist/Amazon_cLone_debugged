import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/Product";
import NotFound from "./components/NotFound";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <div className="App">
          <Header />
          <main>
            <Routes> 
              <Route path="/" element={<Navigate to="/home" />} />
               <Route path="/home" element={<Home />} /> 
               <Route path="/login" element={<Login />} /> 
               <Route path="/products" element={<Products />} /> 
              <Route path="/products/:id" element={<ProductDetails />} /> 
               <Route path="*" element={<NotFound />} /> 
             </Routes>
          </main>
       
      </div>
    </>
  );
}

export default App;
