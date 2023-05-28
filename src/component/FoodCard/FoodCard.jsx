import React from 'react';

const FoodCard = ({item}) => {
    const {image, name, price, recipe} = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes"  className='h-60 w-[100vh]'/></figure>
                <p className='absolute bg-slate-900 text-white px-3  right-0 m-4
                '>${price}</p>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;