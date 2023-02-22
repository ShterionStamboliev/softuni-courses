import Book from "./Book"

const BookList = (props) => {
    return (
        <div>
            <h1>Book library</h1>
            <Book
                title={props.books[0].title}
                year={props.books[0].year}
                cast={props.books[0].cast}
            />
        </div>
    );
};

export default BookList;