import { useEffect } from 'react';

import userService from './services/userService'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import UsersList from "./components/UsersList";
import "./Styles.css";

function App() {

    useEffect(() => {
        const users = userService.getUserData();

        console.log(users);
    }, []);



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
