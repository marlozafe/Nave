import React from 'react'

const Banner = () => {
    return (
        <div className='banner-container py-5 mx-lg-5 mx-0 d-flex align-items-center' style={{ height: "340px" }} id='banner'>
            {/* <img src={bannerImg} alt="" className='img-fluid' /> */}
            <div className='container'>
                <div className="d-flex flex-column ">
                    <p className='f-nova-slim text-white fs-1' style={{ wordWrap: 'break-word' }}>Turn everything on with fashion...</p>
                    <div className="row">
                        <div className="col-md-8 text-lg-end text-center">
                            <a href="#products-section" className='btn btn-secondary f-ropa-sans'>Browse our products</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner