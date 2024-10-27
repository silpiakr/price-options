import Link from "../link/Link";

const Nav = () => {

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/About' },
        { id: 3, name: 'Services', path: '/Services' },
        { id: 4, name: 'Contact', path: '/Contact' },
        { id: 5, name: 'Blog', path: '/Blog' }
      ];
      

    return (
        <nav>
            <ul className="flex justify-center">
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Nav;