import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import propertiesData from '../data/properties.json';

export default function SearchPage() {

    const [filters, setFilters] = useState({
        type: '',
        minPrice: '',
        maxPrice: '',
        minBedrooms: '',
        maxBedrooms: '',
        startDate: '',
        endDate: '',
        postcode: '',
    });
    
    const [filteredProperties, setFilteredProperties] = useState([]);
    
    const handleSearch = (e) => {
        e.preventDefault();
      
        const results = propertiesData.properties.filter((property) => {
          const {
            type,
            minPrice,
            maxPrice,
            startDate,
            endDate,
            minBedrooms,
            maxBedrooms,
            postcode,
          } = filters;
      
          return (
            (type === '' || property.type.toLowerCase() === type.toLowerCase()) &&
            (minPrice === '' || property.price >= parseInt(minPrice)) &&
            (maxPrice === '' || property.price <= parseInt(maxPrice)) &&
            (startDate === '' || property.added.year >= parseInt(startDate)) &&
            (endDate === '' || property.added.year <= parseInt(endDate)) &&
            (minBedrooms === '' || property.bedrooms >= parseInt(minBedrooms)) &&
            (maxBedrooms === '' || property.bedrooms <= parseInt(maxBedrooms)) &&
            (postcode === '' || property.location.toLowerCase().includes(postcode.toLowerCase()))
          );
        });
      
        if (results.length === 0) {
            setFilteredProperties(propertiesData.properties);
          } else {
            setFilteredProperties(results);
          }
    };

  const [savedProperties, setSavedProperties] = useState([]);

  // Fetch saved properties from localStorage
  useEffect(() => {
    const storedProperties = JSON.parse(localStorage.getItem("savedProperties")) || [];
    setSavedProperties(storedProperties);
    
  }, []);

  return (
    <div>
        <Navbar/>
        <h2 style={{ marginTop : '20px' }} class="text-center mb-4">Property Search Form</h2>
        {/* form section*/}
        <div class="container my-4">
            <form style={{ marginTop : '40px' }} onSubmit={handleSearch}>
                <div class="row g-3">
                    <div class="col-md-6 col-lg-4">
                        <label for="type" class="form-label">Type</label>
                        <select style={{ height : '35px' }} id="type" class="form-select" value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
                            <option selected>Select Property type</option>
                            <option value="House">House</option>
                            <option value="Flat">Flat</option>
                            <option value="any">Any</option>
                        </select>
                    </div>
                    <div class="col-md-4 col-lg-2">
                        <label for="minPrice" class="form-label">Min Price</label>
                        <input value={filters.minPrice} onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })} type="number" class="form-control" id="minPrice" placeholder="Min Price"/>
                    </div>
                    <div class="col-md-4 col-lg-2">
                        <label for="maxPrice" class="form-label">Max Price</label>
                        <input value={filters.maxPrice} onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} type="number" class="form-control" id="maxPrice" placeholder="Max Price"/>
                    </div>
                    <div class="col-md-6 col-lg-2">
                        <label for="minBedrooms" class="form-label">Min Bedrooms</label>
                        <input value={filters.minBedrooms} onChange={(e) => setFilters({ ...filters, minBedrooms: e.target.value })} type="number" class="form-control" id="minBedrooms" placeholder="Min Bedrooms"/>
                    </div>
                    <div class="col-md-6 col-lg-2">
                        <label for="maxBedrooms" class="form-label">Max Bedrooms</label>
                        <input value={filters.maxBedrooms} onChange={(e) => setFilters({ ...filters, maxBedrooms: e.target.value })} type="number" class="form-control" id="maxBedrooms" placeholder="Max Bedrooms"/>
                    </div>
                    <div class="col-md-6 col-lg-2">
                        <label for="startDate" class="form-label">Start Date</label>
                        <input value={filters.startDate} onChange={(e) => setFilters({ ...filters, startDate: e.target.value })} type="date" class="form-control" id="startDate"/>
                    </div>
                    <div class="col-md-6 col-lg-2">
                        <label for="endDate" class="form-label">End Date</label>
                        <input value={filters.endDate} onChange={(e) => setFilters({ ...filters, endDate: e.target.value })} type="date" class="form-control" id="endDate"/>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <label for="postcode" class="form-label">Postcode Area</label>
                        <input type="text" class="form-control" id="postcode" placeholder="e.g. BR1, NW1"/>
                    </div>
                    <div style={{ marginTop : '36px' }} class="col-lg-2 mt-10">
                        <button type="submit" class="btn btn-primary custom-btn1">Search</button>
                    </div>
                </div>
                <br></br>
            </form>
        </div>

        <div class="row mt-15">
            <div class="col-md-6">
                <div class="saved-items">
                    <h4>Saved Items</h4>
                    <div class="row">
                    {savedProperties.length > 0 ? (
                    savedProperties.map((property) => (
                            <div  key={property.id} class="w-100">
                                <div class="search-item d-flex align-items-center"> {/* repeat */}
                                    <div class="flex-grow-10 me-3">
                                        <img src={property.picture} alt="Property"/>
                                    </div>
                                    <div >
                                        <h5></h5>
                                        <p>Location: {property.location}
                                        <br/>Price: {property.price}
                                        <br/>Bedrooms: {property.bedrooms}</p>
                                        <button class="btn btn-primary btn-custom">
                                            <a style={{ color : 'white' }} href={property.url}>View</a>
                                        </button>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No saved properties found.</p>
                    )}
                    </div>
                </div>
            </div>
            
            <div class="col-md-6 mt-20">
                <div class="search-results">
                    <h4>Search Results</h4>
                    
                    <div className="row">
                        
                        {filteredProperties.length === 0 ? (
                        <div>
                            <div className="row">
                            {propertiesData.properties.map((property) => (
                                <div className="w-100" key={property.id}>
                                    <div className="search-item d-flex align-items-center">
                                        <div className="flex-grow-10 me-3">
                                            <img src={property.picture} alt="Property" />
                                        </div>
                                        <div>
                                            <h5>{property.type}</h5>
                                            <p>
                                                Location: {property.location}
                                                <br />
                                                Price: ${property.price}
                                                <br />
                                                Bedrooms: {property.bedrooms}
                                            </p>
                                            <button className="btn btn-primary btn-custom">
                                                <a style={{ color: 'white' }} href={property.url}>
                                                View
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        ) : (
                        <div className="row">
                            {filteredProperties.map((property) => (
                            <div className="w-100" key={property.id}>
                                <div className="search-item d-flex align-items-center">
                                    <div className="flex-grow-10 me-3">
                                        <img src={property.picture} alt="Property" />
                                    </div>
                                <div>
                                    <h5>{property.type}</h5>
                                    <p>
                                    Location: {property.location}
                                    <br />
                                    Price: ${property.price}
                                    <br />
                                    Bedrooms: {property.bedrooms}
                                    </p>
                                    <button className="btn btn-primary btn-custom">
                                    <a style={{ color: 'white' }} href={property.url}>
                                        View
                                    </a>
                                    </button>
                                    <button className="btn btn-secondary">Save</button>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
