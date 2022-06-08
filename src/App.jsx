import Home from './components/Home';
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom'

export default function App() {
    const backgroundColor = (color) => {
        document.querySelector('body').style.backgroundColor = color
    };

    return (
        <Routes>
            <Route path='/' element={<Home backgroundColor={backgroundColor} />} />
            <Route path='/about' element={<About backgroundColor={backgroundColor} />} />
            <Route path='/projects' element={<Projects backgroundColor={backgroundColor} />} />
            <Route path='/contact' element={<Contact backgroundColor={backgroundColor} />} />
            <Route path='/*' element={<h1>Page Not Found!</h1>} />
        </Routes>
    );
};