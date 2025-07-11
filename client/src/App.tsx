import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DivineRelics from './pages/DivineRelics';
import RelicDetail from './pages/RelicDetail';
import Temple from './pages/Temple';
import Cart from './pages/Cart';
import PaymentSuccess from './pages/PaymentSuccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/divine-relics" element={<DivineRelics />} />
        <Route path="/relic/:id" element={<RelicDetail />} />
        <Route path="/temple" element={<Temple />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
