import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Cooking Safely. All rights reserved.</p>
    </footer>
  );
}

export default Footer;