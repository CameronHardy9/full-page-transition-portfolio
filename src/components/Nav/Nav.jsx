import './Nav.css';

export default function Nav(props) {return(
        <nav className="nav">
            <ul>
                <li>
                    <button type='button' aria-label='Home' onClick={() => {
                        props.updateView(-100, -14.2857);
                    }}>Home</button>
                </li>
                <li>
                    <button type='button' aria-label='About' onClick={() => {
                        props.updateView(-300, 0);
                    }}>About</button>
                </li>
                <li>
                    <button type='button' aria-label='Projects' onClick={() => {
                        props.updateView(0, -71.4285);
                    }}>Projects</button>
                </li>
                <li>
                    <button type='button' aria-label='Contact' onClick={() => {
                        props.updateView(-500, -57.1428);
                    }}>Contact</button>
                </li>
            </ul>
        </nav>
    )
}