import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/NavBar.css';
import { ReactComponent as PlaylistIcon } from '../assets/NavBarAssets/queue_music_white_18dp.svg';
import { ReactComponent as ExploreIcon } from '../assets/NavBarAssets/explore_white_18dp.svg';

export class NavBar extends Component {
    
    render() {
        return(
            <nav className='NavBar'>
                <div className='Links'>
                    <span>
                        <NavLink exact={true} activeClassName='is-active' to='/' className='Tab'>
                            <PlaylistIcon className='svgIcon filled'/>
                            Playlist
                        </NavLink>
                        <NavLink activeClassName='is-active' to='/explore' className='Tab'>
                            <ExploreIcon className='svgIconE filled'/>
                            Explore
                        </NavLink>
                    </span>
                </div>
            </nav>
        );
    }

}