import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="netflix logo"
        className="nav__logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix logo"
        className="nav__avatar"
      />
    </nav>
  );
};

export default Nav;
