import PropTypes from "prop-types";
import Features from "../Features/Features";

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-pink-300 rounded-md p-4">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-8 font-bold">{name}</h4>
            <div className="px-4">
                {
                    features.map((feature, idx) => <Features key={idx} feature ={feature}></Features>)
                }
            </div>
            <div className="text-right">
            <button className="btn hover:text-gray-800 hover:bg-yellow-300 bg-green-400 border-none w-full mt-8 rounded-lg font-bold text-white">Buy Now</button>
            </div>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;