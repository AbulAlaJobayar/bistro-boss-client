import React from 'react';
import SectionTitle from '../../../component/SectionTitle';
import img from '../../../assets/home/featured.jpg'
import './Feattured.css'

const Featured = () => {
    return (
        <div className='featured-item text-white bg-fixed pt-8 my-20'>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className='md:flex justify-center items-center py-20 pt-12 px-36'>
                <div>
                    <img src={img} alt="featured image" />
                </div>
                <div className='ml-10'>
                    <p>March 20, 2023</p>
                    <p className='uppercase'>WHERE CAN I GET SOME?</p>
                    <p className='text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className='btn btn-outline'> Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;