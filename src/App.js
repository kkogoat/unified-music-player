
// CSS
import './css/App.css';

// Components
import { MenuBar } from './components/MenuBar';
import { PlayPause } from './components/PlayPause';
import { EmbedPlayer } from './components/EmbedPlayer';

// Main Window that holds all other components
function App() {
    return (
        <div className='App'>
            {/* THIS IS HOW TO COMMENT */}
            <MenuBar />
            <header>
                Edit App.JS to change this screen. <br></br>
                Add components to do features. <br></br>
                Editing this file is LIVE, so no need to "npm run electron:serve"
            </header>
            <EmbedPlayer
                url="http://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1" />
            <PlayPause />
        </div>
    );
}

export default App