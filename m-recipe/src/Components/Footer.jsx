import { Link } from "react-router-dom"

export default function Footer({theme}) {

  
  const footerBg = theme === 'light' ? 'text-gray-800 bg-white' : 'text-gray-200 bg-slate-800'

	return (
		<footer
      className={`py-12 px-4 mt-16 ${footerBg}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3
              className="font-['Poppins'] font-semibold mb-4"
              style={{ color: "" }}
            >
              RecipeReveal
            </h3>
            <p
              className="font-['Lato'] text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Unlock Your Culinary Journey with authentic Indian recipes and
              detailed cooking guidance.
            </p>
          </div>

          <div>
            <h4
              className="font-['Poppins'] font-medium mb-4"
              style={{ color: "" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
               <li>
          <Link
            to="/"
            className="font-['Lato'] text-sm transition-colors cursor-pointer hover:underline"
            style={{ color: "var(--text-secondary)" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/recipe"
            className="font-['Lato'] text-sm transition-colors cursor-pointer hover:underline"
            style={{ color: "var(--text-secondary)" }}
          >
            All Recipes
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="font-['Lato'] text-sm transition-colors cursor-pointer hover:underline"
            style={{ color: "var(--text-secondary)" }}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="font-['Lato'] text-sm transition-colors cursor-pointer hover:underline"
            style={{ color: "var(--text-secondary)" }}
          >
            About Us
          </Link>
        </li>
              {/* {["Home", "All Recipes", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    className="font-['Lato'] text-sm transition-colors cursor-pointer"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link}
                  </button>
                </li>
              ))} */}
            </ul>
          </div>

          <div>
            <h4
              className="font-['Poppins'] font-medium mb-4"
              style={{ color: "" }}
            >
              Categories
            </h4>
            <ul className="space-y-2">
              {["Vegan", "Non-Veg", "High Protein", "Quick Meals"].map(
                (category) => (
                  <li key={category}>
                    <span
                      className="font-['Lato'] text-sm cursor-pointer"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {category}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4
              className="font-['Poppins'] font-medium mb-4"
              style={{ color: "" }}
            >
              Connect
            </h4>
            <ul className="space-y-2">
              {["Instagram", "Facebook", "Twitter", "YouTube"].map((social) => (
                <li key={social}>
                  <span
                    className="font-['Lato'] text-sm cursor-pointer"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {social}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <p
            className="font-['Lato'] text-sm text-center"
            style={{ color: "var(--text-secondary)" }}
          >
            © 2025 RecipeReveal. All rights reserved. Made with ❤️ for food
            lovers.
          </p>
        </div>
      </div>
    </footer>
	)
}