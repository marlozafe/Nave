import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

import userProfile from '../img/profile.jpg'

const Navbar = () => {
    const getIcon = (icon, size = "sm") => {
        return <FontAwesomeIcon icon={icon} size={size} />
    }

    return (
        <div>
            <div className="navbar navbar-light bg-white shadow-sm">
                <div className="container">
                    <div className="row align-items-center w-100 mx-0 gy-1 gx-0 row-cols-lg-3 row-cols-2 row-cols-md-2">
                        <div className='col-lg col-12 col-md-12 order-2 order-lg-0 mt-2'>
                            <ul className="nav justify-content-lg-start justify-content-center">
                                <li className='nav-item'><a href="" className='nav-link link-success f-ropa-sans'>HOME</a></li>
                                <li className='nav-item'><a href="" className='nav-link link-success f-ropa-sans'>MEN</a></li>
                                <li className='nav-item'><a href="" className='nav-link link-success f-ropa-sans'>WOMEN</a></li>
                            </ul>
                        </div>
                        <div className="d-flex align-items-baseline col-lg col-md-3 col-4 justify-content-lg-center justify-content-start mx-0 order-0 order-lg-1">
                            <h4 className="py-1 px-2 fs-4 bg-success text-light my-1 rounded text-center f-offside">N</h4>
                            <p className="text-success ms-2 my-1 fs-4 text-center f-nova-slim">Nave</p>
                        </div>
                        <div className="col-lg col-8 col-md-9 order-1 text-end">
                            <img src={userProfile} alt="" className="ms-3 rounded-circle" style={{width:"26px"}} />
                            <a className="link-success ms-3" href="#">{getIcon(faSearch, 'lg')}</a>
                            <a className="link-success ms-3" href="#">{getIcon(faShoppingCart, 'lg')}</a>
                            
                            <a className="link-success ms-3" href="#">{getIcon(faBars, 'lg')}</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar