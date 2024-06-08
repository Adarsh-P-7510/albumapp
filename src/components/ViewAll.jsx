import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changedata] = useState([])
    const fetchData=()=>{
        console.log("hello")
        axios.get("https://jsonplaceholder.typicode.com/photos").then(
            (response)=>{
changedata(response.data)
            }
        )
        
    }
    useEffect(()=>{fetchData()},[])


    return (
        <div>
            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            {
                                data.map(
                                    (value, index) => {


                                        return <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-40">
                                            <div class="card">
                                                <img src={value.url} class="card-img-top" alt="..." />
                                                <img src={value.thumbnailUrl} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.title}</h5>
                                                    <p class="card-text">{value.userid}</p>
                                                    <p class="card-text">{value.id}</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll