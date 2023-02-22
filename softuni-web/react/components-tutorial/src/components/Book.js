const Book = (props) => {
    return (
        <li> className="book"
            <div>Book title: {props.title}</div>
            <div>Book author: {props.author}</div>
            <div>Book price: {props.price}</div>
        </li>
    )
};

export default Book;