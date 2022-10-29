import React from "react";
import "../App.css";
import "./reset.css";

function Links() {
  const links = [
    {
      name: "Twitter Link",
      target: "_blank",
      href: "https://twitter.com/shemigam1",
      id: "",
    },
    {
      name: "Zuri Team",
      target: "_blank",
      href: "https://training.zuri.team/",
      id: "btn__zuri",
    },
    {
      name: "Zuri Books",
      target: "_blank",
      href: "http://books.zuri.team",
      id: "books",
      title: "get coding and design books here",
    },
    {
      name: "Python Books",
      target: "_blank",
      href: "https://books.zuri.team/python-for-beginners?ref_id='shemigam1'",
      id: "books__python",
      title: "buy my python books while stocks still last",
    },
    {
      name: "Background Check for Coders",

      target: "_blank",
      href: "https://background.zuri.team",
      id: "pitch",
      title: "click here to get background checks on coders",
    },
    {
      name: "Design Books",
      target: "_blank",
      href: "https://books.zuri.team/design-rules",
      id: "book__design",
      title: "get free design books from zuri here",
    },
  ];
  // "Twitter Link",
  // "Zuri Team",
  // "Zuri Books",
  // "Python Books",
  // "Background Check for Coders",
  // "Design Books",
  return (
    <div className="links">
      {links.map((link) => (
        <div className="link">
          <a
            href={link.href}
            title={link.title}
            id={link.id}
            target={link.target}
          >
            {link.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Links;
