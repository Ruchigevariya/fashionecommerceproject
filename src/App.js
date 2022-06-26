import logo from './logo.svg';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Home from './Container/home/Home';
import { Route, Switch } from 'react-router-dom';
import Shop from './Container/shop/Shop';
import Aboutus from './Container/pages/Aboutus';
import Shopdetails from './Container/pages/Shopdetails';
import Shoppingcart from './Container/pages/Shoppingcart';
import Checkout from './Container/pages/Checkout';
import Blogdetails from './Container/pages/Blogdetails';
import Blog from './Container/blog/Blog';
import Contacts from './Container/Contacts/Contacts';
import Login from './Container/Login/Login';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path={"/"} exact component={Home}></Route>
        <Route path={"/shop"} exact component={Shop}></Route>
        <Route path={"/about"} exact component={Aboutus}></Route>
        <Route path={"/shop-details"} exact component={Shopdetails}></Route>
        <Route path={"/shopping-cart"} exact component={Shoppingcart}></Route>
        <Route path={"/checkout"} exact component={Checkout}></Route>
        <Route path={"/blog-details"} exact component={Blogdetails}></Route>
        <Route path={"/blog"} exact component={Blog}></Route>
        <Route path={"/contact"} exact component={Contacts}></Route>
        <Route path={"/login"} exact component={Login}></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
