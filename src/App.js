import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ListBeers from './Pages/ListBeers';
import RandomBeer from './Pages/RandomBeer';
import NewBeer from './Pages/NewBeer';
import OneBeer from './Pages/OneBeer'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/beers" element={<ListBeers/>}>
      <Route path=":id" element={<OneBeer/>}/>
      </Route>
      <Route path="/random-beer" element={<RandomBeer/>}/>
      <Route path="new-beer" element={<NewBeer/>}/>
    </Routes>
    </div>
  );
}

export default App;
