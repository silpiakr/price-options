import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Features = ({ feature }) => {
    return (
        <div>
            <p className="flex items-center gap-2"><FaCheckCircle /> {feature}</p>
        </div>
    );
};
Features.popeTypes = {
    feature: PropTypes.string
}
export default Features;