import { memo } from "react";
import "./Header.css";

export const Header = memo(
  ({ links, selectedLink, setSelectedLink, setCurrentPage }) => {
    const clickHandler = (link) => {
      setSelectedLink(link);
      setCurrentPage(1);
    };

    return (
      <div className="header-list">
        {links.map((link, i) => (
          <button
            onClick={() => clickHandler(link)}
            key={i}
            className="header-list-item"
            style={{
              borderBottom:
                link.text === selectedLink.text ? "1px solid #dcf836" : "none",
            }}
          >
            <p
              style={{
                color: link.text === selectedLink.text ? "#dcf836" : "#fff",
              }}
            >
              {link.text}
            </p>
          </button>
        ))}
      </div>
    );
  }
);
