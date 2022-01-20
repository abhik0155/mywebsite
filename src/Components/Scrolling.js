import React from 'react'

export const Scrolling = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://www.readersdigest.ca/wp-content/uploads/2016/05/prescription-medicine.jpg" className="d-block w-100" alt="Slide 1" width="1225" height="400" />
              </div>
              <div className="carousel-item">
                <img src="https://www.eposts.co/wp-content/uploads/2018/05/how-to-dispose-of-unused-and-expired-medication_detail.jpg" className="d-block w-100" alt="Slide 2" width="1225" height="400"/>
              </div>
              <div className="carousel-item">
                <img src="https://getwallpapers.com/wallpaper/full/8/7/8/1520385-medical-wallpaper-backgrounds-3840x2160-high-resolution.jpg" className="d-block w-100" alt="Slide 3"  width="1225" height="400" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    )
}
