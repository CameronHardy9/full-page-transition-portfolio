import './Nav.css';

export default function Nav(props) {
    //For y-axis coordinate - 100 / # of total rows in grid
    const magicNegativeNumber = -(100 / 7);

    return(
        <nav className="nav">
            <ul>
                <li>
                    <button type='button' aria-label='Home' onClick={() => {
                        props.updateView(-100, magicNegativeNumber);
                    }}>Home</button>
                </li>
                <li>
                    <button type='button' aria-label='About' onClick={() => {
                        props.updateView(-300, 0 * magicNegativeNumber);
                    }}>About</button>
                </li>
                <li>
                    <button type='button' aria-label='Projects' onClick={() => {
                        props.updateView(0, 5 * magicNegativeNumber);
                    }}>Projects</button>
                </li>
                <li>
                    <button type='button' aria-label='Contact' onClick={() => {
                        props.updateView(-500, 4 * magicNegativeNumber);
                    }}>Contact</button>
                </li>
            </ul>
        </nav>
    )
}