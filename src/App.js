
import './App.css';
import image from './shopping.jpg';
import imageTwo from './shopping-done.jpg';
import { Grocerylist } from './GroceryList';

function App() {
  return (
    <div className="app">
      <img src={ image } width="300px" alt="shopping"/>
      <div className="container">
          <h1>Grocery List</h1>
      </div>
      <Grocerylist />
      <img src={ imageTwo } width="300px" alt="shopping done"/>
    </div>
  );
}

export default App;
