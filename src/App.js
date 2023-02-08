import "./App.css";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos a TeteClothes'/>
    </div>
  );
}

export default App;
