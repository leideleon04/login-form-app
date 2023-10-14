// Using Create-React-App or Vite, create a new React project. Create a LoginForm component that contains the following:
// Username and password input fields, an h3 that says Log In, with a border. Style the component using the default generated CSS file.
// Create a Navigation component that contains links styled like a navbar.
// The links don't have to go anywhere.
// Put the Navigation component at the top of the page and the LoginForm in the center of the page.

import React from 'react';

export default class Navbar extends React.Component {
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="">My Website</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Review</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">More</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
