import Header from './components/Layout/Header';
import CartProvider from './store/CartProvider';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <CartProvider>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
