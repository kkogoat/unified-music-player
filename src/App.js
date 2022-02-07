
// CSS
import './css/App.css';

// Components
import { MenuBar } from './components/MenuBar';
import { NavBar } from './components/NavBar';
import {PlayPause} from './components/PlayPause';

// Main Window that holds all other components
function App() {
    return (
        <div className='App'>
            {/* THIS IS HOW TO COMMENT */}
            <MenuBar />
            <NavBar />
            <div className='Content'>
                <header>
                    Edit App.JS to change this screen. <br></br>
                    Add components to do features. <br></br>
                    Editing this file is LIVE, so no need to "npm run electron:serve"
                </header>
            </div>
            <PlayPause />
        </div>
    );
}

export default App