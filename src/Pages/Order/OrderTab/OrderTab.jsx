import FoodCard from "../../../component/FoodCard/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-4">
            {
                items.map((item,id)=><FoodCard
                key={id}
                item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;