import Navigation from "./Navigation";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="main">
        <div className="header-content">
          <h1> Benita's portfolio </h1>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default Header;
