import React from "react";

function Footer() {
  return (
    <footer>
      <div className="extra-links">
        <div className="links">
          <div className="logo">
            <a href="" className="img"></a>
          </div>
          <ul>
            <li>Company</li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">For the Record</a>
            </li>
          </ul>
          <ul>
            <li>COMMUNITIES</li>
            <li>
              <a href="">For Artists</a>
            </li>
            <li>
              <a href="">Developers</a>
            </li>
            <li>
              <a href="">Advertisting</a>
            </li>
            <li>
              <a href="">Investors</a>
            </li>
            <li>
              <a href="">Vendors</a>
            </li>
          </ul>
          <ul>
            <li>USEFUL LINKS</li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Web Player</a>
            </li>
            <li>
              <a href="">Free Mobile App</a>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </div>
      </div>
      <div className="details">
        <ul>
          <li>
            <a href="">Legal</a>
          </li>
          <li>
            <a href="">Privacy Center</a>
          </li>
          <li>
            <a href="">Cookies</a>
          </li>
          <li>
            <a href="">About Ads</a>
          </li>
          <li>
            <a href="">Accessibility</a>
          </li>
        </ul>
        <div>
          <span>
            <a href="">
              <i className="fa-solid fa-earth-africa"></i>India (English)
            </a>
          </span>
          <span>
            <i className="fa-regular fa-copyright"></i>2023 Spotify AB
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
