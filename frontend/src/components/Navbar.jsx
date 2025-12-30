import { Link, useLocation } from "react-router-dom";
import { FaHome, FaPlus } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-12 pt-10 text-white">
      <div className="flex h-16 items-center justify-between sm:flex-row">
        {location.pathname === "/create" ? (
          <Link to="/">
            <FaHome className="text-3xl" />
          </Link>
        ) : (
          <div></div>
        )}
        <div className="text-3xl flex space-x-2">
          <Link to="/create">
            <button className="h-10 w-10 flex items-center justify-center rounded hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer">
              <FaPlus className="text-3xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
