import './App.css'
import Routing from './components/Routing/Routing';
import NewSwiper from './components/Swiper/Swiper';
import { CartProvider } from './context/cartContext';
import { FiltersProvider } from './context/filtersContext';


function App() {
  

  return (
    <div>
      <CartProvider>
        <FiltersProvider>
        <Routing>
        </Routing>
        </FiltersProvider>
      </CartProvider>
    </div>
  )
}

export default App
