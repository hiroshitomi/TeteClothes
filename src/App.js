import "./App.css";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element= {<ItemListContainer/>} />
        <Route
          path="*"
          element={
            <div>
              <h1>Esta página no existe</h1>
            </div>
          }/>
        <Route path='/category/:categoryId' element= {<ItemListContainer/>} />
        <Route path='/item/:id' element= {<ItemDetailContainer/>} />
        <Route path='/cart' element= {<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
