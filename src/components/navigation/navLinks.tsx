import React from "react";
import Link from "./Link";
import Routes from "./routes";

interface ILink {
  href: string;
  label: string;
  key?: string;
}

const links = Routes.map((link: ILink) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const NavLinks: React.FC = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link activeClassName="active" href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavLinks;
