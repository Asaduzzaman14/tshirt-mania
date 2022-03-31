import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grandpa from './component/Grandpa/Grandpa';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import OrderReview from './component/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/orderteview' element={<OrderReview />} />
        <Route path='/grandpa' element={<Grandpa />} />

      </Routes>

    </div>
  );
}

export default App;
