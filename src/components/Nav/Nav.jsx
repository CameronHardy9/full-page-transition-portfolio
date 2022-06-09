import './Nav.css';

export default function Nav() {
    return(
        //TODO: Add onClick to each button for CSS page transitions
        <nav className="nav">
            <ul>
                <li>
                    <button type='button' aria-label='Home'>Home</button>
                </li>
                <li>
                    <button type='button' aria-label='About'>About</button>
                </li>
                <li>
                    <button type='button' aria-label='Projects'>Projects</button>
                </li>
                <li>
                    <button type='button' aria-label='Contact'>Contact</button>
                </li>
            </ul>
        </nav>
    )
}