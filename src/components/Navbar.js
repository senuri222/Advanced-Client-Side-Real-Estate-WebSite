import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav style={{ marginTop : '10pxs', backgroundColor:'rgb(3, 43, 73)' }} class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand" style={{ color: 'white', fontSize : "20px" }}  href="/">EstateEase</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div style={{ marginLeft : '950px' }} class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div  class="navbar-nav ms-auto">
                    <a style={{ color: 'white', fontSize : "17px" }} class="nav-link active" aria-current="page" href="/">Home</a>
                    <a style={{ color: 'white', fontSize : "17px", marginLeft : '15px' }} class="nav-link" href="/search">Search Properties</a>
                    <a style={{ color: 'white', fontSize : "17px", marginLeft : '15px' }} class="nav-link" href="/saved">Saved Properties</a>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
