import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/tseriesmusic/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        target="_blank"
        href="https://twitter.com/TSeries"
        className="twitter social"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/tseries.official/?hl=en"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}
