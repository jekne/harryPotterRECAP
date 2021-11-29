import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/">
        <strong> | HOME CHARACTERS |</strong>
      </NavLink>
      <NavLink to="/houses">
        <strong> | CHARACTERS HOUSES |</strong>
      </NavLink>
      <NavLink to="/selector">
        <strong> | SELECTOR |</strong>
      </NavLink>
    </div>
  );
}
