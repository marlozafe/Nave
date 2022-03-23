import React, { useEffect, useState } from 'react'
import { app, db } from './FireBaseHelper'
import { getStorage, ref, getDownloadURL, getBlob, listAll } from 'firebase/storage'

const Product = ({ product }) => {
    const storage = getStorage();

    const getImage = (imageName) => {
        let url = `https://firebasestorage.googleapis.com/v0/b/nave-70ad0.appspot.com/o/${imageName}?alt=media&token=c711c54b-a54e-494f-87b8-0e7e3760fd91`
        return url;
    }

    const [files, setFiles] = useState();

    useEffect(() => {
        const fetchImages = async () => {
            let result = await listAll(ref(storage, 'productImages'));
            let urlPromises = result.items.map((imageRef) =>
                getDownloadURL(imageRef)
            );

            return Promise.all(urlPromises);
        };

        const loadImages = async () => {
            const urls = await fetchImages();
            setFiles(urls);
        };
        loadImages();
    }, []);

    const addToCart = (productId) =>{
        console.log('id: ',  productId)
    }

    return (
        <div>
            <div className="row ">
                <div className="col-md-6 border-top-success product text-start order-1 order-lg-0 mb-3">
                    <p className="fs-2 f-nova-slim mt-3 text-center text-capitalize">{product.name}</p>
                    <div className="d-flex justify-content-center gx-2">
                        <button className='btn-sm btn btn-success mx-1 rounded-5'>1</button>
                        <button className='btn-sm btn btn-outline-success mx-1'>2</button>
                        <button className='btn-sm btn btn-outline-success mx-1'>3</button>
                    </div>
                    <p className='mt-3 f-nova-slim text-start'>{product.description}</p>
                    <button onClick={() => addToCart(product.id)} className='btn btn-outline-success f-ropa-sans fs-6' style={{borderRadius:"0 20px 0 20px"}}>Add to cart</button>
                </div>
                <div className="col-md-6 order-0 order-lg-1 mb-3">
                    <div className='row justify-content-center'>
                        <div className="col-md-10 col-lg-8 product-image-container">
                            <img src={getImage(product.image1)} alt="" className="img-fluid product-image shadow" style={{borderRadius:"0 30px 0 30px"}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product