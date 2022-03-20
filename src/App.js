import React from "react";
import axios from "axios";
import {connect} from "react-redux";

import {Header} from "./components/";
import {Home, Cart} from "./pages";
import { setPizzas as setPizzasAction } from "./redux/actions/pizzas";

import { Route, Routes } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/pizzas.json').then(({data}) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    return (
      <div className="wrapper">
    <Header/>
      <div className="content">
    <Routes>
          <Route path="/" element={<Home items={this.props.items}/>} exact />
          {/*<Route path="/" element={<Home items={[]}/>} exact />*/}
          <Route path="/cart" element={<Cart />} exact />
    </Routes>
      </div>
    </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
