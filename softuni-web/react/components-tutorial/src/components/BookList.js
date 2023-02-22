import Book from "./Book";

const BookList = () => {
    return (
        <ul>
            <Book
                title="IT"
                author="R.F.DD"
                price="25.55"
            />
            <Book
                title="Potter"
                author="ASD"
                price="22.22"
            />
        </ul>
    )
};

export default BookList;