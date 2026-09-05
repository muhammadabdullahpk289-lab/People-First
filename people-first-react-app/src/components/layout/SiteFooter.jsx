import { Link } from "react-router-dom";
import msg from '../../assets/active-page-img/10010.svg'
import "./SiteFooter.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-address">
        58A2 Kickstart Tipu Road Gulberg, Lahore, PK
      </div>

      <div className="footer-row">
        <div className="footer-links">
          <Link to="/privacy">Privacy</Link>
          <span className="footer-dividers">|</span>
          <Link to="/terms">Terms of Service</Link>
          <span className="footer-dividers">|</span>
          <Link to="/cookies">Cookies</Link>
        </div>

        <Link to="/say-hello" className="footer-say-hello">
          <span>Say Hello!</span>
          <span className="say-hello-icon">
           <img src={msg} alt="" />
          </span>
        </Link>
      </div>
    </footer>
  );
}