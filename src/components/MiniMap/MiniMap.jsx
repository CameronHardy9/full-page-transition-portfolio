import './MiniMap.css';
import { useState, useEffect } from 'react';
import uniqid from 'uniqid';

export default function MiniMap(props) {
    const [miniMapPages, setMiniMapPages] = useState([]);
    const [moving, setMoving] = useState(true);

    useEffect(() => {
        for (let i = 0; i < 49; i++) {
            setMiniMapPages((prevState) => [
                ...prevState,
                <div key={uniqid()} className='miniMapPage'></div>
            ])
        }
        console.log(miniMapPages)
    }, [])

    return(
        <div className='miniMapContainer' style={{display: `${moving ? 'grid' : 'none'}`}}>
            <div className='miniMapHead' style={{ top: `calc((100% / 7) * ${props.miniMapY})`, left: `calc((100% / 7) * ${props.miniMapX})`, transition: `all ${props.differentialDelay}s` }}></div>
            {
                miniMapPages.map((page) => {
                    return page;
                })
            }
        </div>
    );
};