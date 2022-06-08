export default function Nav() {
    return (
        <div style={styles.nav}>
            <a style={styles.a} href="/">Home</a>
            <a style={styles.a} href="/about">About</a>
            <a style={styles.a} href="/projects">Projects</a>
            <a style={styles.a} href="/contact">Contact</a>
        </div>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '300px',
        padding: '10px'
    },
    a: {
        textDecoration: 'none',
        color: 'black'
    }
}