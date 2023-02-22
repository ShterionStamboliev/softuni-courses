import Logo from './components/Logo';
import './App.css';
import React from 'react';
import BookList from './components/BookList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo />
                <BookList />
            </header>
        </div>
    );
}

export default App;
