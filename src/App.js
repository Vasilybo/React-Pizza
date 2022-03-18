import React from "react";
import axios from "axios";

import {Header} from "./components/";
import {Home, Cart} from "./pages";

import { Route, Routes } from "react-router-dom";

function App() {

  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/pizzas.json').then(({data}) => {
      setPizzas(data.pizzas);
    });
  }, []);
  return (
    <div className="wrapper">
  <Header/>
    <div className="content">
  <Routes>
        <Route path="/" element={<Home items={pizzas}/>} exact />
        <Route path="/cart" element={<Cart />} exact />
  </Routes>
    </div>
  </div>
  );
}

export default App;
