import { React, useState, useEffect } from "react";
import { Menu, User, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Error parsing user from localStorage", err);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="sticky top-3 z-50 px-4 pt-4">
      
      <div className="max-w-7xl mx-auto bg-[#fefdf6] border border-gray-300 rounded-3xl shadow-sm px-6 py-4">
        
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-3xl font-bold text-gray-800 tracking-wide">
            <Link to="/">mockTest</Link>
          </div>

          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            
            <Link
              to="/"
              className="hover:text-black transition"
            >
              Home
            </Link>

            <Link
              to="/tests"
              className="hover:text-black transition"
            >
              Tests
            </Link>

            <Link
              to="/pass"
              className="hover:text-black transition"
            >
              Pass
            </Link>

            <Link
              to="/about"
              className="hover:text-black transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:text-black transition"
            >
              Contact
            </Link>
          </nav>

          
          {/* Right Side */}
          <div className="flex items-center gap-3">
            
            {/* Mobile Menu */}
            <div className="relative md:hidden">
              
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transition"
              >
                {menuOpen ? (
                  <X className="w-5 h-5 text-gray-700" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700" />
                )}
              </button>

              
              {menuOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-[#fefdf6] border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
                  
                  <ul className="flex flex-col py-2 text-gray-700">
                    
                    <li>
                      <Link
                        to="/"
                        className="block px-5 py-3 hover:bg-[#ece2c6]"
                      >
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/tests"
                        className="block px-5 py-3 hover:bg-[#ece2c6]"
                      >
                        Tests
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/pass"
                        className="block px-5 py-3 hover:bg-[#ece2c6]"
                      >
                        Pass
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/about"
                        className="block px-5 py-3 hover:bg-[#ece2c6]"
                      >
                        About
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/contact"
                        className="block px-5 py-3 hover:bg-[#ece2c6]"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            
            {/* Profile */}
            <div className="relative">
              
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100 transition"
              >
                <User className="w-5 h-5 text-gray-700" />

                {user && (
                  <span className="text-gray-800 font-medium">
                    {user.name}
                  </span>
                )}
              </button>

              
              {profileOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-[#fefdf6] border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
                  
                  <ul className="flex flex-col py-2 text-gray-700">
                    
                    {user ? (
                      <>
                        <li>
                          <Link
                            to="/dashboard"
                            className="block px-5 py-3 hover:bg-[#ece2c6]"
                          >
                            Dashboard
                          </Link>
                        </li>

                        <li>
                          <button
                            onClick={handleLogout}
                            className="w-full text-left px-5 py-3 hover:bg-[#ece2c6]"
                          >
                            Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link
                            to="/login"
                            className="block px-5 py-3 hover:bg-[#ece2c6]"
                          >
                            Login
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/register"
                            className="block px-5 py-3 hover:bg-[#ece2c6]"
                          >
                            Register
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;