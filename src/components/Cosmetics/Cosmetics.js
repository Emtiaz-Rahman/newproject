import React from 'react';

const Cosmetics = (props) => {
    const { name, price, id } = props.cosmetic
    return (
        <div>
            <h3>Buy this:{name}</h3>
            <p>Only for:${price}</p>
            <p>It has a Id:{id}</p>
        </div>
    );
};
export default Cosmetics;