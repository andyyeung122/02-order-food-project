import Header from './components/Layout/Header';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Header></Header>
    </CartProvider>
  );
}

export default App;
