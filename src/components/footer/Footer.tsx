import "./footer.styles.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p> &copy; 2024 - {currentYear} Thought Tip </p>
    </footer>
  );
};

export default Footer;
