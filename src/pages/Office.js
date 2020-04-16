import React from "react";

const Office = () => {
  return (
    <div className="container-fluid">
      <a href="#" className="previous">
        <i className="ti-arrow-left"></i> Overview
      </a>
      <div className="card">
        <div className="card-title">
          <h1 className="orange">Google</h1>
          <button className="clear">
            <i className="ti-close"></i>
          </button>
        </div>
        <div className="card-content">
          <div className="item">
            <p><strong>Address:</strong></p>
            <p className="text-grey">1600 Amphitheatre Parkway Mountain View, CA 94043 USA</p>
          </div>
          <div className="item">
            <p><strong>Revenue:</strong></p>
            <p className="text-grey">US$ 999999</p>
          </div>
          <div className="item">
            <p><strong>Phone No:</strong></p>
            <p className="text-grey">(190) 123456789</p>
          </div>
        </div>
      </div>
      <h1>Offices</h1>
      <br />
      <div className="row">
        <div className="card">
          <div className="card-title">
            <h2>Google</h2>
            <span className="ti-close"></span>
          </div>
          <div className="card-content">
            <div className="item">
              <p><strong>Address:</strong></p>
              <p className="text-grey">1600 Amphitheatre Parkway Mountain View, CA 94043 USA</p>
            </div>
            <div className="item">
              <p><strong>Revenue:</strong></p>
              <p className="text-grey">US$ 999999</p>
            </div>
            <div className="item">
              <p><strong>Phone No:</strong></p>
              <p className="text-grey">(190) 123456789</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <h2>Amazon</h2>
            <span className="ti-close"></span>
          </div>
          <div className="card-content">
            <div className="item">
              <p><strong>Address:</strong></p>
              <p className="text-grey">1600 Amphitheatre Parkway Mountain View, CA 94043 USA</p>
            </div>
            <div className="item">
              <p><strong>Revenue:</strong></p>
              <p className="text-grey">US$ 999999</p>
            </div>
            <div className="item">
              <p><strong>Phone No:</strong></p>
              <p className="text-grey">(190) 123456789</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <h2>Facebook</h2>
            <span className="ti-close"></span>
          </div>
          <div className="card-content">
            <div className="item">
              <p><strong>Address:</strong></p>
              <p className="text-grey">1600 Amphitheatre Parkway Mountain View, CA 94043 USA</p>
            </div>
            <div className="item">
              <p><strong>Revenue:</strong></p>
              <p className="text-grey">US$ 999999</p>
            </div>
            <div className="item">
              <p><strong>Phone No:</strong></p>
              <p className="text-grey">(190) 123456789</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <h2>Alibaba</h2>
            <span className="ti-close"></span>
          </div>
          <div className="card-content">
            <div className="item">
              <p><strong>Address:</strong></p>
              <p className="text-grey">1600 Amphitheatre Parkway Mountain View, CA 94043 USA</p>
            </div>
            <div className="item">
              <p><strong>Revenue:</strong></p>
              <p className="text-grey">US$ 999999</p>
            </div>
            <div className="item">
              <p><strong>Phone No:</strong></p>
              <p className="text-grey">(190) 123456789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Office;
