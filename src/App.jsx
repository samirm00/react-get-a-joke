import './App.css';

import Header from './components/Header';
import JokeContainer from './components/JokeContainer';

const App = () => {
    return (
        <div>
            <Header title="get a joke" />
            <JokeContainer />
        </div>
    );
};

export default App;
