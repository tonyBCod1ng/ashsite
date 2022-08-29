import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { lynkList } from './lynkList';
import Header from './Header';
import Cards from './Cards';
import { cardsInventory } from './cardsInventory';
function App() {


  return (
    <div className="App">
      <Header list={lynkList} brand={'HandCrafty Cards and More!'}/>
      <h2 id="bday">
        Cards
      </h2>
        <div id='grid'>
          <Cards cards={cardsInventory}  />
        </div>
    </div>
  );
}

export default App;
