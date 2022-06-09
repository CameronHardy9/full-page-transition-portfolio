import './Nav.css';

export default function Nav(props) {return(
        <nav className="nav">
            <ul>
                <li>
                    <button type='button' aria-label='Home' onClick={() => {
                        props.updateView(0, 0);
                    }}>Home</button>
                </li>
                <li>
                    <button type='button' aria-label='About' onClick={() => {
                        props.updateView(-100, 0);
                    }}>About</button>
                </li>
                <li>
                    <button type='button' aria-label='Projects' onClick={() => {
                        props.updateView(0, -50);
                    }}>Projects</button>
                </li>
                <li>
                    <button type='button' aria-label='Contact' onClick={() => {
                        props.updateView(-100, -50);
                    }}>Contact</button>
                </li>
            </ul>
        </nav>
    )
}