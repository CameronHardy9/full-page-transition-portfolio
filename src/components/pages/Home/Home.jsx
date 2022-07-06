import './Home.css';
import { useEffect } from 'react';

export default function Home(){
    useEffect(() => {
        const height = document.getElementById('homeH1').clientHeight;
        style.h1 = {
            fontSize: `${height / 3}px`,
            lineHeight: `${height / 3}px`
        };
    }, []);

    return(
        <section className="page grey">
            <h1 id='homeH1'>
                <span style={style.h1}>Hi</span>
                <span style={style.h1}>I am</span>
                <span style={style.h1}>Cameron</span>
            </h1>
        </section>
    );
};

const style = {
    h1: {
        fontSize: '25vh',
        lineHeight: 'normal'
    }
};