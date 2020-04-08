import propTypes from 'prop-types';
import './footer.module.scss';

const Footer = props => {
  return (
    <footer className="footer-container">
      <a href="https://newsapi.org" className="footer-link" target="_blank" rel="noopener noreferrer">
        Powered by NewsAPI.org
      </a>
    </footer>
  );
};

export default Footer;