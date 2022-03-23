import './App.css';
import { app, db } from './components/FireBaseHelper';
import { React, useEffect, useState } from 'react'
import Categories from './components/Categories';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, onValue } from 'firebase/database'
import Banner from './components/Banner';
import Advertisement from './components/Advertisement';
import ProductList from './components/ProductList';




function App() {

  // states
  const [subcategories, setSubcategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const subcat = ref(db, 'subcategories');
    onValue(subcat, (snapshot) => {
      const subcategories = [];
      const list = snapshot.val();
      for (let id in list) {
        subcategories.push(list[id]);
      }
      setSubcategories(subcategories);
    });
  }, [])

  useEffect(() => {
    const subcat = ref(db, 'products');
    onValue(subcat, (snapshot) => {
      const products = [];
      const list = snapshot.val();
      for (let id in list) {
        products.push(list[id]);
      }
      setProducts(products)
    });
  }, [])



  return (
    <div className="App">
      <Navbar />
      <div className="px-4 my-4">
        <Banner />
      </div>
      <div className="container">
        <p className='text-center f-nova-slim text-black-50 my-5 fs-5'>Welcome to <span className='text-success'>Nave...</span></p>

        <div className="my-2">
          <Advertisement />
        </div>

        <div className="products-section" id="products-section">
            <p className='fs-4 my-4 f-ropa-sans text-black-50 text-center'>Our products</p>
            <ProductList/>
        </div>

      </div>
      <div className="mt-3 bottom-0 w-100 start-0 my-0" style={{ bottom: 0 }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
