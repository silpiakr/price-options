import PropTypes from "prop-types";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          id: 1,
          name: "Basic Plan",
          price: 19.99,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Open gym hours only",
            "Basic workout tracking app",
            "Weekly group orientation sessions",
            "10% discount on protein shakes"
          ]
        },
        {
          id: 2,
          name: "Standard Plan",
          price: 39.99,
          features: [
            "24/7 gym access",
            "Locker room and showers",
            "1 free fitness assessment",
            "Access to group classes",
            "Unlimited access to cardio and weight areas",
            "Monthly body composition analysis",
            "Free Wi-Fi"
          ]
        },
        {
          id: 3,
          name: "Premium Plan",
          price: 59.99,
          features: [
            "24/7 gym access",
            "Locker room, showers, and sauna",
            "Personal training sessions (2 per month)",
            "Priority booking for group classes",
            "Access to premium equipment",
            "Nutrition consultation (1 per month)",
            "Access to swimming pool and spa",
            "Advanced workout tracking and goal-setting app"
          ]
        },
        {
          id: 4,
          name: "Family Plan",
          price: 79.99,
          features: [
            "Access for up to 4 family members",
            "24/7 gym access",
            "Locker room and family shower rooms",
            "Free access to all group classes",
            "Discounts on personal training sessions",
            "Family wellness events",
            "Childcare services (2 hours per visit)",
            "Access to family-friendly workout areas"
          ]
        },
        {
          id: 5,
          name: "VIP Plan",
          price: 99.99,
          features: [
            "24/7 access to all gym facilities",
            "Dedicated locker and premium showers",
            "Unlimited personal training sessions",
            "Free nutrition and wellness consultation",
            "Priority booking and access to VIP events",
            "Free guest pass (1 per month)",
            "Complimentary spa and massage services (1 per month)",
            "Personalized training and meal planning",
            "Dedicated workout space during peak hours",
            "Access to exclusive classes and workshops"
          ]
        }
      ];
      

    return (
        <div className="my-12">
            <h2 className="text-5xl font-bold text-center">Best Prices in the town</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {
               priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>) 
            }
            </div>
        </div>
    );
};
PriceOptions.propTypes = {
    priceOptions: PropTypes.object
}

export default PriceOptions;