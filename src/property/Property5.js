import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import propertiesData from '../data/properties.json';

export default function Property5() {

  const navigate = useNavigate();
  const property = propertiesData.properties.find((p) => p.id === "prop5");
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState("/property5/p1.jpeg"); // Default large image
  // List of images
  const images = [
      "/property5/p1.jpeg",
      "/property5/p2.jpeg",
      "/property5/p3.jpeg",
      "/property5/p4.jpeg",
      "/property5/p5.jpeg",    
  ];

  // Function to handle thumbnail click
  const handleThumbnailClick = (image) => {
      setSelectedImage(image);
  };

  const [scale, setScale] = useState(1); // state to track zoom level
  const zoomIn = () => setScale(prev => Math.min(prev + 0.1, 3)); // maximum scale of 3
  const zoomOut = () => setScale(prev => Math.max(prev - 0.1, 1)); // minimum scale of 1
  const resetZoom = () => setScale(1); // reset scale to default

  const saveProperty = () => {
    const savedProperties = JSON.parse(localStorage.getItem("savedProperties")) || [];
  
    if (!property || !property.id) {
      alert("Invalid property data. Unable to save.");
      return;
    }
  
    // Check for duplicates
    const isAlreadySaved = savedProperties.some((item) => item.id === property.id);
    if (isAlreadySaved) {
      alert("This property is already saved.");
      return;
    }
  
    // Save property
    savedProperties.push(property);
    localStorage.setItem("savedProperties", JSON.stringify(savedProperties));
    alert("Property saved!");
  };

  return (
    <div>
        {/* Tab Navigation */}
      <ul style={{ backgroundColor : '#eef5fd' }} className="nav nav-tabs justify-content-center sticky-top">
        <li className="nav-item">
        <button
            onClick={() => navigate(-1)} // Navigate to the previous page
            style={{
              color: "rgba(24,38,91,255)",
              fontSize: "20px",
              fontWeight: 600,
              background: "none",
              border: "none",
              cursor: "pointer",
              marginTop : "8px"
            }}
            className="nav-link"
          >
            ◄ Back
          </button>
        </li>
        <li className="nav-item">
          <a style={{ color : 'rgba(24,38,91,255)', fontSize : '20px' }} className="nav-link" href="#overview">
            Overview
          </a>
        </li>
        <li className="nav-item">
          <a style={{ color : 'rgba(24,38,91,255)', fontSize : '20px' }} className="nav-link" href="#description">
            Description
          </a>
        </li>
        <li className="nav-item">
          <a style={{ color : 'rgba(24,38,91,255)', fontSize : '20px' }} className="nav-link" href="#contacts">
            Contacts
          </a>
        </li>
        <li className="nav-item">
          <a style={{ color : 'rgba(24,38,91,255)', fontSize : '20px' }} className="nav-link" href="#floorPlan">
            Floor Plan
          </a>
        </li>
        <li className="nav-item">
          <a style={{ color : 'rgba(24,38,91,255)', fontSize : '20px' }} className="nav-link" href="#googleMap">
            Google Map
          </a>
        </li>
        <li className="nav-item">
          <button style={{ color : 'rgba(24,38,91,255)', fontSize : '18px', marginTop : '7px', fontWeight : 600 }} type="button" class="btn" onClick={saveProperty}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="corrontColor">
              <path d="M17 3H7a2 2 0 0 0-2 2v16l7-3 7 3V5a2 2 0 0 0-2-2z"/>
            </svg>
            Save
          </button>
        </li>
      </ul>

      {/* Scrollable Sections */}
      <div id="overview" className="py-4">
        <h5></h5>
        {/* Large Image */}
      <div className="text-center mb-4">
        <img
          src={selectedImage}
          alt="Selected Property"
          className="img-fluid"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* Thumbnail Images */}
      <div className="d-flex justify-content-center flex-wrap">
        {images.map((image, index) => (
          <div
            key={index}
            className="m-2"
            style={{
              border: selectedImage === image ? "2px solid blue" : "2px solid transparent",
              cursor: "pointer",
            }}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="img-thumbnail"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
              onClick={() => handleThumbnailClick(image)}
            />
          </div>
        ))}
      </div>
      </div>

        {/* Property Description */}
        <div style={{ backgroundColor: 'transparent' }} id="description" className="mb-4">
          <div style={{ backgroundColor: 'transparent' }} className="  p-4">
          <h2 class="display-5 fw-bold mb-3 text-center">Property Details</h2><br/>

          <div className="row">
              <div style={{ padding : '0 52px 0 70px' }} className="col-md-4">
                <ul className="list-unstyled">
                  <li style={{ fontSize : '17px' }}>
                    <strong>Home type: </strong>{property.type}
                  </li>
                  <li style={{ fontSize : '17px', marginTop : '5px' }}>
                    <strong>bedrooms: </strong>{" "}{property.bedrooms}
                  </li>
                  <li style={{ fontSize : '17px', marginTop : '5px' }}>
                    <strong>Price: </strong>{" "}${property.price.toLocaleString()}
                  </li>
                  <li style={{ fontSize : '17px', marginTop : '5px' }}>
                    <strong>Location: </strong>{" "}{property.location}
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ padding : '0 50px 0 50px', marginTop : '10px' }} className="mb-4">
              <p style={{ fontSize : '17px', fontWeight: 400 }} className="lead">{property.description}</p>
            </div>

            
          </div>
        </div>

      {/* contacts */}
      <div id="contacts" className="py-4">
        <section id="contact" className="contact section">
          <h2 class="display-5 fw-bold mb-3 text-center">Contact Agent</h2><br/>
          <br />
          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">
              {/* Contact Details */}
              <div className="col-lg-6">
                <div style={{ marginLeft: '40px' }} className="row gy-4">
                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="200">
                      <i className="bi bi-geo-alt"></i>
                      <h3>Address</h3>
                      <p>A108 Adam Street</p>
                      <p>New York, NY 535022</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="300">
                      <i className="bi bi-telephone"></i>
                      <h3>Call </h3>
                      <p>+1 5589 55488 55</p>
                      <p>+1 6678 254445 41</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="400">
                      <i className="bi bi-envelope"></i>
                      <h3>Email </h3>
                      <p>info@example.com</p>
                      <p>contact@example.com</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="500">
                      <i className="bi bi-clock"></i>
                      <h3>Open Hours</h3>
                      <p>Monday - Friday</p>
                      <p>9:00AM - 05:00PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="col-lg-6 text-center d-none d-lg-block">
                <img
                  style={{ width: '350px', height: 'auto' }}
                  src="/contact.png"
                  alt="Contact"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* floor plan */}
      <div id="floorPlan" className="py-4">
      <h2 class="display-5 fw-bold mb-3 text-center">Floor Plan</h2><br/>
        <div className="row align-items-center">
          {/* Left Column for Buttons */}
          <div className="col-md-2 text-center">
            
            <div className="mb-3 d-flex flex-column align-items-center">
              <button style={{ width: "100px", backgroundColor : "black" }} className="btn btn-primary mb-2" onClick={zoomIn}>
                Zoom In
              </button>
              <button style={{ width: "100px", backgroundColor :'rgb(66, 69, 73)', color: 'white' }} className="btn mb-2" onClick={resetZoom}>
                Reset
              </button>
              <button style={{ width: "100px", backgroundColor : "black" }} className="btn btn-primary" onClick={zoomOut}>
                Zoom Out
              </button>
            </div>

          </div>
          {/* Right Column for Image */}
          <div className="col-md-10">
            <div
              style={{
                overflow: "hidden",
                width: "100%",
                textAlign: "center",
                padding: "20px",
              }}
            >
              <img
                src="/property5/plan.jpeg"
                alt="Floor Plan"
                className="img-fluid"
                style={{
                  transform: `scale(${scale})`,
                  transition: "transform 0.3s ease",
                  border: "0",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  width: "100%",
                  height: "500px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="googleMap" className="py-4">
        <h2 class="display-5 fw-bold mb-3 text-center">Location on Google Map</h2><br/>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.553227665268!2d-3.1790906847857986!3d51.481583279633655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e0209e2ad61f7%3A0x3b9a77795cc30799!2sCardiff%2C%20UK!5e0!3m2!1sen!2sus!4v1695682828930!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: "0", paddingLeft : '40px', paddingRight : '40px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </div>
  )
}
