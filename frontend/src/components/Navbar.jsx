import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../UserSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.access_token);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setToken(""));
    navigate("/");
  };

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
          <li>
            <Link
              to="/test"
              className="px-2 py-1 text-xl text-white  hover:border-transparent hover:text-blue-200"
            >
              Test
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4">
          {!accessToken ? (
            <li>
              <Link
                to="/"
                className="px-2 py-1 text-xl text-white hover:border-transparent hover:text-blue-200"
              >
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="px-2 py-1 text-xl text-white hover:border-transparent hover:text-blue-200"
              >
                Logout
              </button>
            </li>
          )}
          <li>
            <Link
              to="/register"
              className="px-2 py-1 text-xl text-white  hover:border-transparent hover:text-blue-200"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
