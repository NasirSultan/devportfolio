// components/Header.js
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
   <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">My Portfolio</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav></>
  );
} 


export default Header;
