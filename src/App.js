import React from "react";
import axios from "axios";
import {useDispatch} from "react-redux";

import {Header} from "./components/";
import {Home, Cart} from "./pages";
import {setPizzas} from "./redux/actions/pizzas";

import {Route, Routes} from "react-router-dom";

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get('http://localhost:3001/pizzas').then(({data}) => {
                dispatch(setPizzas(data));
            }
        )
    }, []);
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>} exact/>
                    <Route path="/cart" element={<Cart/>} exact/>
                </Routes>
            </div>
        </div>
    )
}

export default App;

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/pizzas.json').then(({data}) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }
//
//   render() {
//     return (
//       <div className="wrapper">
//     <Header/>
//       <div className="content">
//     <Routes>
//           <Route path="/" element={<Home items={this.props.items}/>} exact />
//           <Route path="/cart" element={<Cart />} exact />
//     </Routes>
//       </div>
//     </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   };
// };
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
