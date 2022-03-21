import React, { useEffect, useState } from 'react';
import Cosmetics from '../Cosmetics/Cosmetics';

const Cosmetic = () => {
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        fetch(`https://elements.free.beeceptor.com/`)
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    return (
        <div>
            <h1>Welcome to my cosmetic store.</h1>
            {
                cosmetics.map(cosmetic => <Cosmetics
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetics>)
            }
        </div>
    );
};

export default Cosmetic;