
// CSS
import './css/App.css';

// Components
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { MenuBar } from './components/MenuBar';
import { NavBar } from './components/NavBar';
import { Playlist } from './components/Playlist';
import { Explore } from './components/Explore';

import {PlayPause} from './components/PlayPause';


// Main Window that holds all other components
function App() {
    return (
        <Router>
            <div className='App'>
                {/* THIS IS HOW TO COMMENT */}
                <MenuBar />
                <NavBar />
                <div className='Content'>
                    <Switch>
                        <Route exact path="/"><Playlist /></Route>
                        <Route exact path="/explore"><Explore /></Route>
                        <header>
                            Edit App.JS to change this screen. <br></br>
                            Add components to do features. <br></br>
                            Editing this file is LIVE, so no need to "npm run electron:serve"
                        </header>
                    </Switch>
                </div>
                <PlayPause />
            </div>
        </Router>
    );
}

export default App