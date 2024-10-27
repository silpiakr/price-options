import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
    const [open, setOpen] = useState(false);


    9

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/About' },
        { id: 3, name: 'Services', path: '/Services' },
        { id: 4, name: 'Contact', path: '/Contact' },
        { id: 5, name: 'Blog', path: '/Blog' }
      ];
      

    return (
        <nav className="bg-slate-400 p-6">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open == true ? <AiOutlineClose /> : <AiOutlineMenu className="text-xl" />
                }
                {/* <AiOutlineMenu className="text-xl " /> */}
            </div>
            <ul className={`md:flex duration-1000 justify-center lg:items-center absolute md:static ${open? 'top-12' : '-top-60'} bg-slate-400 lg:bg-transparent rounded px-6 lg:top-3 shadow-lg lg:shadow-none`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Nav;