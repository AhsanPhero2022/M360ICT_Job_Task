import { Button } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <div className="lg:flex gap-3 mx-auto">
      <li>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </li>
      <li>
        <Link to="/categoryList">
          <Button>Category List</Button>
        </Link>
      </li>
      <li>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </li>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100  z-[1] mt-3  p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <h1 className="text-xl font-semibold ">Task M360ICT</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=""> {navItems} </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <Button type="primary" className="">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
