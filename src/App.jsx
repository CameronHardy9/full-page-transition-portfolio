import Nav from "./components/Nav/Nav.jsx";
import MiniMap from "./components/MiniMap/MiniMap.jsx";
import Home from "./components/pages/Home/Home.jsx";
import About from "./components/pages/About/About.jsx";
import Projects from "./components/pages/Projects/Projects.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";
import Placeholder from "./components/Placeholder.jsx";
import Portfolio from "./components/pages/Projects/projectPages/Portfolio/Portfolio.jsx";
import Pokedex from "./components/pages/Projects/projectPages/Pokedex/Pokedex.jsx";
import KanbanGo from "./components/pages/Projects/projectPages/KanbanGo/KanbanGo.jsx";
import CheckbookPocket from "./components/pages/Projects/projectPages/CheckbookPocket/CheckbookPocket.jsx";
import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

export default function App() {
    const [translateX, setTranslateX] = useState(-100);
    const [translateY, setTranslateY] = useState(-14.2857);
    const [differentialDelay, setDifferentialDelay] = useState(2);
    const [placeholders, setPlaceholders] = useState([]);

    function updateView(x, y) {
        setDifferentialDelay(
            //Formula to calculate transition delay based on distance to traverse
            (((Math.abs(translateX - x) / 100) + (Math.abs(translateY - y) / (100 / 7))) / 1.5)
        );
        //Set new (x, y) coordinates
        setTranslateX(x);
        setTranslateY(y);
    }

    //Actual content pages
    const pages = [
        <Home key={uniqid()} />,
        <About key={uniqid()} />,
        <Projects updateView={updateView} key={uniqid()} />,
        <Contact key={uniqid()} />,
        <Portfolio key={uniqid()} />,
        <CheckbookPocket key={uniqid()} />,
        <KanbanGo key={uniqid()} />,
        <Pokedex key={uniqid()} />
    ]

    //Loads placeholders into all empty spaces of a 7x7 grid
    useEffect(() => {
        //TODO: Refactor to cycle through array using incrementing counter -- < array[count] >
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
                <MiniMap miniMapX={Math.abs(translateX) / 100} miniMapY={Math.abs(translateY) / (100 / 7)} differentialDelay={differentialDelay} />
            </header>
            <main className="pageContainer" style={{transition: `transform ${differentialDelay}s`, transform: `translate(${translateX}%, ${translateY}%)`}}>
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