import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-8 px-6 hover:bg-blue-500 hover:text-white font-semibold">
            <a className='bg-transparent' href={route.path}>{route.name}</a>
        </li>
    );
};
Link.propTypes = {
    route: PropTypes.object
}
export default Link;