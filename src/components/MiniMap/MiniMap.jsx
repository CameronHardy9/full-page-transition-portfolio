import './MiniMap.css';
import { useState, useEffect } from 'react';
import uniqid from 'uniqid';

export default function MiniMap(props) {
    const [miniMapPages, setMiniMapPages] = useState([]);

    useEffect(() => {
        for (let i = 0; i < 49; i++) {
            setMiniMapPages((prevState) => [
                ...prevState,
                <div key={uniqid()} className='miniMapPage'></div>
            ])
        }
    }, [])

    return(
        <div className='miniMapContainer' >
            <div className='miniMapHead' style={{ 
                    top: `calc((100% / 7) * ${props.miniMapY})`, 
                    left: `calc((100% / 7) * ${props.miniMapX})`, 
                    transitionProperty: `top, left`, 
                    transitionDuration: `${props.differentialDelay}s` 
                }}></div>
            {
                miniMapPages.map((page) => {
                    return page;
                })
            }
        </div>
    );
};