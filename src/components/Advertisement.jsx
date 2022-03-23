import React from 'react'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
const Advertisement = () => {
  return (
    <div>
        <div className="row justify-content-center gx-5 gy-2">
            <div className="col-sm">
                <div className="card">
                     <img src={img1} className="card-img-top" alt="..." style={{height:"200px"}}/>
                    <div className="card-body">

                    </div>
                </div>
            </div>
            <div className="col-sm">
                <div className="card">
                     <img src={img2} className="card-img-top" alt="..." style={{height:"200px"}}/>
                    <div className="card-body">

                    </div>
                </div>
            </div>
            <div className="col-sm">
                <div className="card">
                     <img src={img3} className="card-img-top" alt="..." style={{height:"200px"}}/>
                    <div className="card-body">

                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Advertisement