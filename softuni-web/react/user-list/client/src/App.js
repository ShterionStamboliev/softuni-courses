import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import UsersList from "./components/UsersList";
import "./Styles.css";

function App() {
    return (
        <>
            <Header />

            <main className="main">

                <section className="card users-container">
                    <Search />
                    <UsersList />
                </section>

            </main>

            <Footer />
        </>
    );
}

export default App;
