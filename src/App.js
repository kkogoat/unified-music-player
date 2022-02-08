
// CSS
import './css/App.css';

// Components
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
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
                    </Switch>
                </div>
                <PlayPause />
            </div>
        </Router>
    );
}

export default App