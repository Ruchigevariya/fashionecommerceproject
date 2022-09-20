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
import Contacts from './Container/Contacts/Contacts';
import Login from './Container/Login/Login';
import PublicRoute from './Route/PublicRoute';
import PrivateRoute from './Route/PrivateRoute';
import Search from './Container/Search/Search';
import ToggleContext from './Context/ThemeContext';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/Store';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react'
import Cart from './Container/Cart/Cart';

function App() {
  return (
    <div>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ToggleContext>
              <Header />
              <Switch>
                <PublicRoute path={"/"} exact component={Home} />
                <PublicRoute path={"/shop"} exact component={Shop} />
                <PublicRoute path={"/about"} exact component={Aboutus} />
                <PublicRoute path={"/shop-details"} exact component={Shopdetails} />
                <PublicRoute path={"/shopping-cart"} exact component={Shoppingcart} />
                <PublicRoute path={"/checkout"} exact component={Checkout} />
                <PublicRoute path={"/blog-details"} exact component={Blogdetails} />
                <PublicRoute path={"/contact"} exact component={Contacts} />
                <PublicRoute path={"/login"} restricted={true} exact component={Login} />
                <PublicRoute path={"/search"} exact component={Search} />
                <PrivateRoute path={"/cart"} exact component={Cart} />
              </Switch>
              <Footer />
            </ToggleContext>
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </div>
  );
}

export default App;

