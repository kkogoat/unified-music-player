
// CSS
import './css/App.css';

// Components
import {ExampleComponent} from './components/ExampleComponent';

// Main Window that holds all other components
function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <p>
                    Edit App.JS to change this screen. <br></br>
                    Add components to do features. <br></br>
                    Editing this file is LIVE, so no need to "npm run electron:serve"
                </p>
            </header>
            
            {/* THIS IS HOW TO COMMENT */}
            <ExampleComponent />
        </div>
    );
}

export default App