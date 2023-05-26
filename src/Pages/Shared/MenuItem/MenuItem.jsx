import React from 'react';

const MenuItem = ({ item }) => {
    const {image, name, price, recipe} = item
    return (
        <>
        <div className='flex space-x-2'>
            <img style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="images" className='w-[120px] border-2' />
            <div>
                <h3 className='uppercase'>{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500 '>${price}</p>
        </div>
       
        </>
    );
};

export default MenuItem;