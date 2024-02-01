import React from "react";
import ReactDOM from "react-dom/client";

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <a href="" className="img"></a>
        </div>
        <nav>
          <div className="menu-btn">
            <i class="fa-solid fa-bars"></i>
            {/* <i class="fa-solid fa-close"></i> */}
          </div>
          <ul>
            <li>
              <a href="">Premium</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Download</a>
            </li>
            <li>|</li>
            <li>
              <a href="">Sign up</a>
            </li>
            <li>
              <a href="">Log in</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
