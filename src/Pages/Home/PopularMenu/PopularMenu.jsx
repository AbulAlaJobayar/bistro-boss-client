import SectionTitle from '../../../component/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu]=useMenu();
    const popular= menu.filter(item=>item.category=='popular')
    return (
        <section className='mt-20 mb-12'>
            <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map((item,id)=><MenuItem
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