import Header from './Header';
import {BrowserRouter,Routes,Route,HashRouter} from 'react-router-dom';
import Home from './Home'
import About from './About';
import Contact from './Contact';
import { ProductCard } from './ProductCard';
import WebFont from 'webfontloader';
import { useEffect,useState} from 'react';
import CartList from './CartList';
import Signin from './Signin';

function App() {
  const [cart,setCart] = useState([]);
  const addtoCart =(data) =>{
    const itemInCart = cart.find(item=>item.id === data.id);
    if (itemInCart){
      itemInCart.quantity++;
    }else{
    setCart([...cart,{...data,quantity:1}])
    console.log(cart)
    }
  }
  // const removeItem =(id)=>{
  //   const newCart = cart.filter((item) => item.id !== id)
  //   setCart(newCart)
  // }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka','Figtree']
      }
    });
   }, [])
  return (
   <HashRouter basename={process.env.PUBLIC_URL}>
   <Routes>
    <Route path='/' element={<Signin/>}/>
    <Route path='home' element={<Home />}/>
    <Route path='about'  element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='products' element={<ProductCard addtoCart={addtoCart} count={cart.length}  cart={cart}/>}/>
    <Route path='cart' element={<CartList/>}/>
   </Routes>
   </HashRouter>
  );
}

export default App;
