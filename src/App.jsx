import Nav from "./components/Nav/Nav.jsx";
import Home from "./components/pages/Home/Home.jsx";
import About from "./components/pages/About/About.jsx";
import Projects from "./components/pages/Projects/Projects.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";
import Placeholder from "./components/Placeholder.jsx";
import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

export default function App() {
    const [translateX, setTranslateX] = useState(-100);
    const [translateY, setTranslateY] = useState(-14.2857);
    const [placeholders, setPlaceholders] = useState([]);

    function updateView(x, y) {
        setTranslateX(x);
        setTranslateY(y);
    }

    const pages = [
        <Home key={uniqid()} />,
        <About key={uniqid()} />,
        <Projects key={uniqid()} />,
        <Contact key={uniqid()} />
    ]

    useEffect(() => {
        console.log('useEffect')
        let colorPaletteCopy = [...colorPalette];

        for (let i = 0; i < 49 - pages.length; i++) {
            if (colorPaletteCopy.length === 0) {
                colorPaletteCopy = [...colorPalette];
            }

            const selection = Math.floor(Math.random() * colorPaletteCopy.length)
            const color = colorPaletteCopy[selection];

            setPlaceholders((prevState) => [
                ...prevState, 
                <Placeholder key={uniqid()} color={color} />
            ])

            colorPaletteCopy.splice(selection, 1);
        }
    },[])

    return (
        <>
            <header>
                <Nav updateView={updateView} />
            </header>
            <main className="pageContainer" style={{transform: `translate(${translateX}%, ${translateY}%)`}}>
                {pages.map((page) => {
                    return (
                        page
                        )
                    })}
                {placeholders.map((placeholder) => {
                    return (
                        placeholder
                    )
                    })}
            </main>
        </>
    );
};

const colorPalette = [
    '#005f73',
    '#0a9396',
    '#94d2bd',
    '#e9d8a6',
    '#ee9b00',
    '#ca6702',
    '#bb3e03',
    '#ae2012',
    '#9b2226',
    '#277da1',
    '#577590',
    '#4d908e',
    '#43aa8b'
];