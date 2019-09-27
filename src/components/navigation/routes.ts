interface ILink {
  href: string;
  label: string;
  key?: string;
  dropdown?: boolean;
  options?: IDropdownOptions[];
}

interface IDropdownOptions {
  label: string;
  icon: string;
  href: string;
}

const routes = [
  { href: "/", label: "Home" },
  { href: "/podcast", label: "Podcast" },
  { href: "/about", label: "About" },
  { href: "/articles", label: "Articles" },
  {
    href: "#",
    label: "Subscribe",
    dropdown: true,
    options: [
      { label: "iTunes", icon: "#", href: "#" },
      { label: "Spotify", icon: "#", href: "#" },
      { label: "Google Podcasts", icon: "#", href: "#" }
    ]
  }
].map((link: ILink) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export default routes;
