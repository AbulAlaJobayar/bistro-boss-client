import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,img,title}) => {
    return (
        <div className='pt-10'>
             {title && <Cover
                img={img}
                title={title}
            ></Cover>}
           <div className='grid md:grid-cols-2 gap-10 mt-16'>
                {
                    items.map((item,id)=><MenuItem
                    key={id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className='btn btn-outline'> Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;