import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-blue-500 border border-blue-500">
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/todo"
              className="px-2 py-1 text-xl text-white  hover:border-transparent hover:text-blue-200"
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="px-2 py-1 text-xl text-white  hover:border-transparent hover:text-blue-200"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="px-2 py-1 text-xl text-white  hover:border-transparent hover:text-blue-200"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/edit-profile"
              className="px-2 py-1 text-xl text-white  hover:border-transparent hover:text-blue-200"
            >
              edit-profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
