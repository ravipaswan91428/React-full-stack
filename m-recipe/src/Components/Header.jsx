import { ChefHat, Moon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = ({toggleTheme,theme}) => {
  const headerBg = theme === 'light' ? 'text-gray-900 bg-white' : 'bg-slate-900 text-gray-200'

  return (
    <nav
      className={`sticky top-0 z-50 border-b ${headerBg}`}
      style={{
        backgrourecipesndColor: "var(--bg-primary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
          to='/'
          >
          <div className="flex items-center gap-2 cursor-pointer">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "var(--brand-primary)",
              }}
            >
              <ChefHat className="w-6 h-6 text-text-primary" />
            </div>
            <div>
              <h1
                className="font-['Poppins'] font-semibold"
                style={{
                  color: "",
                  fontSize: "1.25rem",
                }}
              >
                RecipeReveal
              </h1>
              <p className="text-xs" style={{ color: "" }}>
                Unlock Your Culinary Journey
              </p>
            </div>
          </div>
          </Link>

          <div className="flex justify-center items-center gap-12">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink
                to="/"
                className="font-['Lato'] font-medium transition-colors hover:text-orange-600"
              >
                Home
              </NavLink>
              <NavLink
                to="/recipe"
                className="font-['Lato'] font-medium transition-colors hover:text-orange-600"
              >
                View All Recipes
              </NavLink>
            </div>
            {/* Dark Mode Toggle */}
             <button
                onClick={toggleTheme}
                className='p-2 px-4 text-gray-50 rounded-3xl duration-200'>
                <Moon  className="bg-white stroke-amber-500 hover:stroke-orange-600 duration-200 rounded-4xl"/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
