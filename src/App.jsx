import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

export default function App() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main className="pageContainer">
                <Home />
                <About />
                <Projects />
                <Contact />
            </main>
        </>
    );
};