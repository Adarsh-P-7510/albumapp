import React from 'react'
import NavBar from './NavBar'

const AddAlbum = () => {
  return (
    <div>
      <NavBar/>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                  <label htmlFor="" className="form label">userid</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                  <label htmlFor="" className="form label">id</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                  <label htmlFor="" className="form label">title</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                  <label htmlFor="" className="form-form">size</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                  <label htmlFor="" className="form label">quality</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                  <button className="btn btn-success">addphphoto</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddAlbum