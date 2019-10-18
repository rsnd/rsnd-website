export interface ILink {
  href: string;
  label: string;
  key?: string;
  dropdown?: boolean;
  options?: IDropdownOptions[];
}

export interface IDropdownOptions {
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
      {
        label: "iTunes",
        icon: "../../../static/logos/apple-logo.svg",
        href: "#"
      },
      {
        label: "Spotify",
        icon: "../../../static/logos/spotify.svg",
        href: "#"
      },
      {
        label: "Google Podcasts",
        icon: "../../../static/logos/google-podcasts-logo.svg",
        href: "#"
      },
      {
        label: "Stitcher",
        icon: "../../../static/logos/stitcher-icon.svg",
        href: "#"
      }
    ]
  },
  { href: "/contact", label: "Contact" }
].map((link: ILink) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export default routes;
