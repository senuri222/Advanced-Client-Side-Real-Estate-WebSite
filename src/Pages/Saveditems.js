import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Saveditems() {

  const [savedProperties, setSavedProperties] = useState([]);

  // Fetch saved properties from localStorage
  useEffect(() => {
    const storedProperties = JSON.parse(localStorage.getItem("savedProperties")) || [];
    setSavedProperties(storedProperties);
  }, []);

  // Handle removal of a property
  const removeProperty = (id) => {
    const updatedProperties = savedProperties.filter(property => property.id !== id);
    setSavedProperties(updatedProperties);
    localStorage.setItem("savedProperties", JSON.stringify(updatedProperties));
    alert("Property removed from saved items.");
  };

  return (
    <div class='style="height: 100vh;"'>
        <Navbar/>
     <h2 class="display-5 fw-bold mb-3 text-center">Saved Properties</h2><br/>

     {/* property list */}
     <div class="container my-5">
        <div class="row g-4">
          {/*  Property Card 1  */}
          {savedProperties.length > 0 ? (
            savedProperties.map((property) => (
            <div key={property.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={property.picture || "/default-image.jpeg"}
                  alt={property.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}/>
                  <div className="card-body">
                    <h5 className="card-title">{property.name}</h5>
                    <p className="card-text">
                      <span style={{ color: 'white' }} className="badge mb-2">
                        New - {`${property.added.month} ${property.added.day}, ${property.added.year}`}
                      </span> 
                      <h5 style={{ color: 'black' }} className="card-title">
                        ${property.price.toLocaleString()}
                      </h5>
                      <p style={{ color: 'black' }} className="card-text">
                        <span>{property.bedrooms} bed</span>{' '} 
                      </p>
                      <p style={{ color: 'black' }}>{property.location}</p>
                        <span style={{ color: 'black' }}>● {property.type} for sale</span>
                    </p>
                      <div className="row">
                        <div style={{ marginLeft : '10px' }} className="col">
                          <button className="btn btn-danger" onClick={() => removeProperty(property.id)}>
                            Remove
                          </button>
                        </div>
                        <div style={{ marginRight : '10px' }} className="col text-end">
                          <button className="btn btn-dark">
                            <a style={{ color : 'white' }} href={property.url}>Read More</a>
                          </button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No saved properties found.</p>
          )}
          </div>
      </div>

        <Footer/>
    </div>
  )
}
