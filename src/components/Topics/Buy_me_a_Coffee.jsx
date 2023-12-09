import './BuyMeACoffee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Buy_me_a_Coffee = () => {
  return (
    <div className="home">
      <p className="coffee-paragraph">
        Hey there, coffee enthusiast! ☕ Your support means the world to me. If
        you decide to buy me a coffee, know that it&apos;s not just about the
        caffeine boost (although, that&apos;s a delightful bonus!). It&apos;s
        about the positive energy and encouragement that comes with it.
      </p>
      <p className="coffee-paragraph">
        By supporting me, you&apos;re helping me continue creating valuable
        content and improving my services. Your generosity fuels my passion and
        creativity. And hey, if you don&apos;t buy me a coffee, that&apos;s
        totally fine too! I won&apos;t be missing out on any sips, but your
        thoughtful consideration warms my heart just the same.
      </p>
      <p className="coffee-paragraph">
        Cheers to you, whether you&apos;re sipping coffee or sharing kindness!
        🎉😄
      </p>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a
          href="https://www.buymeacoffee.com/phyhxmmjrj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faCoffee} className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Buy_me_a_Coffee;
