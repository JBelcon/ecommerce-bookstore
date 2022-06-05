import { NavLink } from "react-router-dom";

const Navbar = () => {
  const urls = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Shop",
      url: "/shop",
    },
    {
      name: "Categories",
      url: "/categories",
    },
    {
      name: "Contact Us",
      url: "/contact",
    },
  ];

  return (
    <>
      <nav>
        <ul className="flex gap-5 lg:gap-16">
          {urls.map((url) => {
            return (
              <NavLink
                className="uppercase outline-none focus:outline-none"
                to={url.url}
              >
                {url.name}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export { Navbar };
