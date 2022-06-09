import Nav from "./components/Nav/Nav.jsx";
import Home from "./components/pages/Home/Home.jsx";
import About from "./components/pages/About/About.jsx";
import Projects from "./components/pages/Projects/Projects.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";
import { useState } from 'react';

export default function App() {

    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);


    function updateView(x, y) {
        setTranslateX(x);
        setTranslateY(y);
    }

    return (
        <>
            <header>
                <Nav updateView={updateView} />
            </header>
            <main className="pageContainer" style={{transform: `translate(${translateX}%, ${translateY}%)`}}>
                <Home />
                <About />
                <Projects />
                <Contact />
            </main>
        </>
    );
};