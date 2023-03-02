import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/todos`)
      .then(res => res.json())
      .then(data => { 
        const keys = Object.keys(data).map(id => ({id, ...data[id]}));
        setTodos(keys);
      });
  }, []);

  const todoStatus = id => {
    console.log(id);
  }

  return (
    <div>
      <Header />

      <main className="main">

        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn">+ Add new Todo</button>
          </div>

          <div className="table-wrapper">

            {/* <Loading /> */}

            <TodoList todos={todos} todoStatus={todoStatus} />
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}

export default App;
