import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import propertiesData from '../data/properties.json';

export default function HomeHero() {
  const [properties, setProperties] = useState([]);  // state to store properties
  const navigate = useNavigate();  // navigation hook

  // Simulate fetching data
  useEffect(() => {
    setProperties(propertiesData.properties);  // load properties data

    // Restore scroll position 
    const savedPosition = sessionStorage.getItem('scrollPosition');  // get saved scroll position
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));  // restore scroll position
    }

    // Save scroll position before leaving the page
    const saveScrollPosition = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY);  // save scroll position
    };

    // Cleanup event listeners 
    window.addEventListener('beforeunload', saveScrollPosition);  // add listener to save position
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);  // cleanup listener
    };
  }, []);

  const handleReadMore = (id) => {
    // Save scroll position before navigating
    sessionStorage.setItem('scrollPosition', window.scrollY);  // save position before navigation
    navigate(`/property/${id}`);  // navigate to property details page
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center hero-content">
              <br />
              <br />
              <h1 style={{ color: 'rgba(24,38,91,255)' }}>
                Find Your Dream Property Today With Us!
              </h1>
              <br />
              <p style={{ fontSize: '15px', color: 'rgba(24,38,91,255)' }}>
                Discover a wide range of beautiful properties tailored to your
                needs. Whether you're searching for a cozy apartment, a spacious
                family home, or a prime investment opportunity, we've got you
                covered. Filter your search by property type, price range,
                bedrooms, and location to find the perfect match. Your ideal home
                is just a click away – start exploring now!
              </p>
            </div>
            <div className="col-md-6 hero-image text-center">
              <img style={{ width: '600px' }} src="1.png" alt="Hero Image" />
            </div>
          </div>
        </div>
      </div>

      {/* Property List */}
      <div className="container my-5">
        <h2 className="display-5 fw-bold mb-3 text-center">Browse Homes</h2>
        <br />
        <div className="row g-4">
          {properties.map((property) => (
            <div key={property.id} className="col-md-4">
              <div
                style={{ backgroundColor: 'rgb(3, 43, 73)', }} className="card">
                <div className="card-img-top">
                  <img
                    src={property.picture}
                    alt="Property Image"
                    className="img-fluid w-100"
                    style={{ width: '300px', height: '200px' }}
                  />
                </div>
                <div className="card-body">
                  <span style={{ color: 'rgb(226, 232, 240)' }} className="badge mb-2">
                    New - {`${property.added.month} ${property.added.day}, ${property.added.year}`}
                  </span>
                  <h5 style={{ color: 'rgb(226, 232, 240)' }} className="card-title">
                    ${property.price.toLocaleString()}
                  </h5>
                  <p style={{ color: 'rgb(226, 232, 240)' }} className="card-text">
                    <span>{property.bedrooms} bed</span>
                  </p>
                  <p style={{ color: 'rgb(226, 232, 240)' }}>{property.location}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span style={{ color: 'rgb(226, 232, 240)' }}>
                      ● {property.type} for sale
                    </span>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      style={{ color: 'rgb(11, 17, 24)', backgroundColor: 'rgb(226, 232, 240)' }}>
                      <a style={{ color : 'rgb(11, 17, 24)' }} href={property.url}>Read More</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <section style={{ marginBottom : "40px" }} className="about-us py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="font-weight-bold mb-4">About Our Estate Agency</h2>
              <p style={{ lineHeight: '1.8' }} className="text-muted mb-4">
                At EstateEase, we are committed to helping you find your perfect home or
                investment property. With years of experience in the real estate market, we
                pride ourselves on providing exceptional service tailored to meet your unique
                needs.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <h5 className="text-primary">Our Mission</h5>
                  <br />
                  <ul className="list-unstyled">
                    <li>
                      <i className="bi bi-check-circle me-3 text-primary"></i>Connecting
                      People to Homes
                    </li>
                    <br />
                    <li>
                      <i className="bi bi-check-circle me-3 text-primary"></i>Ensuring
                      Transparent Deals
                    </li>
                    <br />
                    <li>
                      <i className="bi bi-check-circle me-3 text-primary"></i>Providing
                      Exceptional Client Care
                    </li>
                    <br />
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5 className="text-primary">Our Vision</h5>
                  <br />
                  <ul className="list-unstyled">
                    <li>
                      <i className="bi bi-bullseye me-3 text-primary"></i>Be the Go-To Real
                      Estate Partner
                    </li>
                    <br />
                    <li>
                      <i className="bi bi-bullseye me-3 text-primary"></i>Innovating the Real
                      Estate Experience
                    </li>
                    <br />
                    <li>
                      <i className="bi bi-bullseye me-3 text-primary"></i>Building Stronger
                      Communities
                    </li>
                    <br />
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src="aboutus.jpg" alt="About Us" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>
      
      {/* features */}
      <section style={{ marginBottom : '40px' }} class="features-cards section">

      <div class="container">

        <div class="row gy-4">

          <div style={{ backgroundColor : '#fff3e2', padding : '20px' }} class="col-xl-3 col-md-3" data-aos="zoom-in" data-aos-delay="100">
            <div class="feature-box orange">
              <i class="bi bi-award" style={{ fontSize: '5rem',  color: '#fbb34f' }}></i>
              <h4>Property Listings</h4>
              <p>Explore a wide range of properties, from cozy apartments to spacious family homes, tailored to suit your needs.</p>
            </div>
          </div>

          <div style={{ backgroundColor : '#ddc9d1', padding : '20px' }} class="col-xl-3 col-md-3" data-aos="zoom-in" data-aos-delay="200">
            <div class="feature-box blue">
              <i class="bi bi-patch-check" style={{ fontSize: '5rem',  color: '#c14979' }}></i>
              <h4>Advanced Search</h4>
              <p>Find your perfect property with our advanced search options, including filters for location, price, and amenities.</p>
            </div>
          </div>

          <div style={{ backgroundColor : '#d5f1e4', padding : '20px' }} class="col-xl-3 col-md-3" data-aos="zoom-in" data-aos-delay="300">
            <div class="feature-box green">
              <i class="bi bi-sunrise" style={{ fontSize: '5rem',  color: '#56cc93' }}></i>
              <h4>Save Favorites</h4>
              <p>Save your favorite properties and revisit them anytime, making your property search seamless and convenient.</p>
            </div>
          </div>

          <div style={{ backgroundColor : '#fdeded', padding : '20px' }} class="col-xl-3 col-md-3" data-aos="zoom-in" data-aos-delay="400">
            <div class="feature-box red">
              <i class="bi bi-shield-check" style={{ fontSize: '5rem',  color: '#f39191' }}></i>
              <h4>Contact Agents</h4>
              <p>Get in touch with our experienced real estate agents for personalized advice and assistance in your property journey.</p>
            </div>
          </div>

        </div>

      </div>

    </section>

    <section class="py-5">
          <div class="container">
              <div class="row text-center mb-5">
                  <div class="col-12">
                      <h2 class="section-title">Meet Our Team</h2>
                      <p class="text-muted">Dedicated professionals working together to deliver exceptional real estate services</p>
                  </div>
              </div>

              <div class="row g-4">
                  <div class="col-lg-3 col-md-6">
                      <div class="team-member text-center p-4">
                          <img style={{ borderRadius : '100%', border : '2px solid rgba(255, 255, 255, 0.58)', width : '200px', height : '200px'  }} src="agent1.jpg" alt="Team Member 1" class="mb-4 shadow"/>
                      <h5 class="mb-1">Michael Chen</h5>
                          <p class="text-muted mb-3">Marketing Specialist</p>
                          <p class="small mb-3">Sophia crafts campaigns that connect buyers with their dream homes.
                              </p>
                      </div>
                  </div>

                  <div class="col-lg-3 col-md-6">
                      <div class="team-member text-center p-4">
                      <img style={{ borderRadius : '100%', border : '2px solid rgba(255, 255, 255, 0.58)', width : '200px', height : '200px'  }} src="agent2.jpg" alt="Team Member 1" class="mb-4 shadow"/>
                      <h5 class="mb-1">Sophia Davis</h5>
                          <p class="text-muted mb-3">Founder & CEO</p>
                          <p class="small mb-3">With over 20 years of experience in real estate, John leads our vision and strategy.</p>
                      </div>
                  </div>

                  <div class="col-lg-3 col-md-6">
                      <div class="team-member text-center p-4">
                      <img style={{ borderRadius : '100%', border : '2px solid rgba(255, 255, 255, 0.58)', width : '200px', height : '200px'  }} src="agent3.jpg" alt="Team Member 1" class="mb-4 shadow"/>
                      <h5 class="mb-1">Emily Martinez</h5>
                          <p class="text-muted mb-3">Property Manager</p>
                          <p class="small mb-3">Emily oversees property listings and ensures client satisfaction.</p>
                      </div>
                  </div>

                  <div class="col-lg-3 col-md-6">
                      <div class="team-member text-center p-4">
                      <img style={{ borderRadius : '100%', border : '2px solid rgba(255, 255, 255, 0.58)', width : '200px', height : '200px'  }} src="agent4.jpg" alt="Team Member 1" class="mb-4 shadow"/>
                      <h5 class="mb-1">David Wilson</h5>
                          <p class="text-muted mb-3">Lead Developer</p>
                          <p class="small mb-3">Michael ensures the smooth operation of our web app and new features development.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>


    </div>
  );
}
