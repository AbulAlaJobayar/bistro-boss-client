import React from 'react';
import SectionTitle from '../../../component/SectionTitle';
import img from '../../../assets/menu/salad-bg.jpg'

const ChefRecommended = () => {
    return (
        <>
            <section className='mt-16'>
                <SectionTitle
                    subHeading={'Should Try'}
                    heading={'CHEF RECOMMENDS'}
                ></SectionTitle>
                <div className='grid md:grid-cols-3'>
                    {/* card-1 */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src={img} alt="Shoes"  />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                                <button className="btn  bg-base-300 border-t-0 border-x-0 border-b-4 border-yellow-600 text-yellow-600">add to cart</button>
                            </div>
                        </div>
                    </div>
                    {/* card-2 */}

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure >
                            <img src={img} alt="Shoes" />
                        </figure>
                        <div className="card-body w-full items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                                <button className="btn text-yellow-600">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    {/* card-3 */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure >
                            <img src={img} alt="Shoes" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                            <button className="btn  bg-base-300 border-t-0 border-x-0 border-b-4 border-yellow-600 text-yellow-600">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default ChefRecommended;