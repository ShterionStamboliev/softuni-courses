import './App.css';
import BookList from './components/BookList';
import Timer from './components/Timer';

function App() {
    const books = [
        { title: 'Harry potter', year: 2007, cast: ['Ema Watson', 'Jeffry'] },
        { title: 'Iron man', year: 2010, cast: ['Pesho', 'Tosho'] }
    ];

    return (
        <div className='App'>
            <h1>React timer</h1>
            <Timer start={5}/>

            <BookList books={books} />
        </div>
    );
}

export default App;