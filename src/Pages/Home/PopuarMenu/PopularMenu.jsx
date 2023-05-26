import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems= data.filter(item=>item.category=='popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <section className='mt-64 mb-12'>
            <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map((item,id)=><MenuItem
                    key={id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='mx-auto w-56 mt-10'>
            <button className="btn  bg-base-300 border-t-0 border-x-0 border-b-4 border-yellow-600 text-yellow-600 ">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;