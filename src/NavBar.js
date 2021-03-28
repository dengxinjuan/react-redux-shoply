import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar narbar-light bg-success">
      <NavLink exact to="/" className="navbar-brand text-light">
        FakeShop
      </NavLink>

      <ul className="navbar-nav flex-row text-light">
        <NavLink exact to="/list" className="nav-item pr-3 text-light">
          Product List
        </NavLink>
        <NavLink exact to="/cart" className="nav-item pr-3 text-light">
          Cart
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
