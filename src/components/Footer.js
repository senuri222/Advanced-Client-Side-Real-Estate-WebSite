import React from 'react'
import './custom.js'
import './styles.css'

export default function Footer() {
  return (
    <div>
      <footer style={{ backgroundColor: 'rgb(3, 43, 73)' }} className="text-light py-5">
        <div className="container">
          <div className="row g-4">
            {/* About Us Section */}
            <div id="aboutUs" className="col-lg-4 col-md-6 col-sm-12">
              <h5 className="mb-4">About Us</h5>
              <p className="mb-4">
                We are a leading estate agency helping individuals and businesses find the perfect property. Whether you are looking to buy, sell, or rent, we provide expert advice and a wide range of listings to meet your needs.
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="col-lg-2 col-md-6 col-sm-12">
              <h5 className="mb-4">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="footer-link">Home</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Properties</a></li>
                <li className="mb-2"><a href="#" className="footer-link">About Us</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Agents</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Contact</a></li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="col-lg-2 col-md-6 col-sm-12">
              <h5 className="mb-4">Services</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="footer-link">Buy a Property</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Rent a Property</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Sell Your Property</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Property Management</a></li>
                <li className="mb-2"><a href="#" className="footer-link">Real Estate Investment</a></li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h5 className="mb-4">Contact Info</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  456 Estate Lane, Beverly Hills, CA 90210
                </li>
                <li className="mb-3">
                  <i className="fas fa-phone me-2"></i>
                  <a href="tel:+1234567890" className="footer-link">+1 (234) 567-890</a>
                </li>
                <li className="mb-3">
                  <i className="fas fa-envelope me-2"></i>
                  <a href="mailto:info@estateagency.com" className="footer-link">info@estateagency.com</a>
                </li>
                <li className="mb-3">
                  <i className="fas fa-clock me-2"></i>
                  Mon - Fri: 9:00 AM - 6:00 PM
                  <p>Copyright © <span id="currentYear">2025</span> Estate Agency. All rights reserved.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
