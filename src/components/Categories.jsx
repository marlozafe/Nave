import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { initializeApp } from "firebase/app";

const Categories = ({subcategories}) => {

    return (
        <div>
            <div className="card rounded-0">
                <div className="card-header text-start bg-white">
                <p className="my-2 text-uppercase fw-bold text-start text-success">CATEGORIES</p>
                </div>
                <div className="card-body">
                    <div className="row scroll-x" style={{overflowX:"scroll"}} >
                        <div className="col-5">
                            <div className="card rounded-0">
                                <div className="card-body">
                                    <p>Mens Apparel</p>
                                </div>
                            </div>
                        </div>
                        {subcategories.map((subcat, index) => (
                            <div className="col" key={index}>
                                <div className="card rounded-0">
                                    <div className="card-body">
                                        <p>{subcat.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories