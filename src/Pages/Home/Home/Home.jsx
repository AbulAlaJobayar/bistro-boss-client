import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommended from "../ChefRecommended/ChefRecommended";
import Featured from "../Featured/Featured";
import Testimonial from "../Featured/Testimonial";
import PopularMenu from "../PopuarMenu/PopularMenu";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <CallUs></CallUs>
           <ChefRecommended></ChefRecommended>
           <Featured></Featured>
           <Testimonial></Testimonial>
           

        </div>
    );
};

export default Home;