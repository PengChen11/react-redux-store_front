import store from './store';
import {Provider} from 'react-redux';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/storefront/categories.js';
import Products from './components/storefront/products.js';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Header />
      <main>
        <Categories />
        <Products />
      </main>
      <Footer />
    </Provider>
  );
}

export default App;
