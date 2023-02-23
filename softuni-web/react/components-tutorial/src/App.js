import './App.css';
import BookList from './components/BookList';
import Counter from './components/Counter';
import Timer from './components/Timer';

function App() {
    const books = [
        { title: 'Harry potter', year: 2007, cast: ['Ema Watson', 'Jeffry'] },
        { title: 'Iron man', year: 2010, cast: ['Pesho', 'Tosho'] }
    ];

    return (
        <div className='App'>
            <h1>React timer</h1>
            <Counter canReset />

        </div>
    );
}

export default App;