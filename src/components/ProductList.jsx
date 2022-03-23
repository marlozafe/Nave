import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set, onValue } from 'firebase/database'
import { app, db } from './FireBaseHelper'
import Product from './Product';
const ProductList = () => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const productListRef = ref(db, 'products');
        onValue(productListRef, (snapshot) => {
            const productList = [];
            const list = snapshot.val();
            for (let id in list) {
                productList.push(list[id]);
            }
            setProductList(productList);
        });
    }, [])



    return (
        <div>
            {productList && productList.map((product, index)=>(
                <Product key={index} product={product}/>
            ))}
        </div>
    )
}

export default ProductList