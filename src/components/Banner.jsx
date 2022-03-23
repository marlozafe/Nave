import React from 'react'

const Banner = () => {
    return (
        <div className='banner-container py-5 d-flex align-items-center' style={{height:"340px"}} id='banner'>
            {/* <img src={bannerImg} alt="" className='img-fluid' /> */}
            <div className='container'>
                <div style={{width:"max-content",margin:"auto"}} className="d-flex flex-column ">
                    <p className='f-ropa-sans text-white fs-1 text-shadow'>Turn everything on with fashion...</p>
                    <a href="#products-section" className='btn btn-secondary f-ropa-sans align-self-end me-5'>Browse our products</a>
                </div>

            </div>
        </div>
    )
}

export default Banner