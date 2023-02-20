import Logo from './components/Logo';
import './App.css';
import React from 'react';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo />
                <Header title="React Demo" />
            </header>
        </div>
    );
}

export default App;
