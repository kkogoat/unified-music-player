import React, {Component} from 'react';

// import '../css/NavBar.css';

export class NavBar extends Component {

    render() {
        return(
            <nav className='NavBar'>
                <div className='Links'>
                    <a href='/Playlists'>Playlists</a>
                    <a href='/Explore'>Explore</a>
                </div>
            </nav>
        );
    }

}