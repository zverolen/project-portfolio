import { contact } from "../../data/copy"
import LinkWithIcon from "../linkWithIcon/LinkWithIcon"

export default function Footer() {
  return (
    <footer className="site-frame full-background">
      <div>
        <h2>{contact.heading}</h2>
        <div>
          <LinkWithIcon linkHref={contact.tg} linkLabel="Telegram" >
            <svg role="image" aria-label="Telegram icon" viewBox="0 0 93 93">
              <path d="M26.1749 44.6392C26.1749 44.6392 44.5815 36.8867 50.9652 34.1568M26.1749 44.6392C21.8127 46.3863 24.3661 48.0242 24.3661 48.0242C24.3661 48.0242 28.09 49.3346 31.282 50.3171C34.4738 51.2999 36.1762 50.208 36.1762 50.208C36.1762 50.208 43.6239 45.1852 51.178 39.8348C58.732 34.4843 42.7727 51.4091 42.7727 51.4091C41.0704 52.9379 41.9215 54.2481 42.6663 54.9032C45.4326 57.3055 52.9867 62.2192 53.4124 62.5466C53.9443 62.9835 56.9235 64.9489 58.7322 64.5121C60.5409 64.0754 60.7537 61.5639 60.7537 61.5639C60.7537 61.5639 62.1368 52.6103 63.4136 44.4208C64.2647 38.6336 65.1159 33.2834 65.2223 31.7546C65.5416 28.0422 61.7112 29.5708 61.7112 29.5708C61.7112 29.5708 53.4124 33.065 50.9652 34.1568M26.1749 44.6392L50.9652 34.1568M46.2416 91.4784C21.2581 91.4784 1.00488 71.2252 1.00488 46.2416C1.00488 21.2581 21.2581 1.00488 46.2416 1.00488C71.2252 1.00488 91.4784 21.2581 91.4784 46.2416C91.4784 71.2252 71.2252 91.4784 46.2416 91.4784Z"></path>
            </svg>
          </LinkWithIcon>
          <LinkWithIcon linkHref={contact.email} linkLabel="Email" >
            <svg role="image" aria-label="Email icon" viewBox="0 0 94 94">
              <path fillRule="evenodd" clipRule="evenodd"  strokeLinejoin="round" d="M47 93C72.4051 93 93 72.4051 93 47C93 21.5949 72.4051 1 47 1C21.5949 1 1 21.5949 1 47C1 72.4051 21.5949 93 47 93ZM25 27C23.3431 27 22 28.3431 22 30V64C22 65.6569 23.3431 67 25 67H69C70.6569 67 72 65.6569 72 64V30C72 28.3431 70.6569 27 69 27H25ZM24.3634 29.7962L46.395 46.5401C46.7526 46.8119 47.2476 46.8119 47.6052 46.5401L69.6366 29.7962C70.3992 29.2166 69.9893 28 69.0316 28H24.9685C24.0107 28 23.6008 29.2166 24.3634 29.7962ZM48.8714 52.6974L57.8354 45.4803C58.5233 44.9264 59.539 45.471 59.4583 46.3505L59.136 49.8652C59.0822 50.4511 59.5434 50.9565 60.1318 50.9565H65.4027C67.5422 50.9565 68 52.2609 68 54C68 55.7391 67.5422 57.4783 65.4027 57.4783H60.1385C59.5477 57.4783 59.0857 57.9877 59.1432 58.5756L59.4421 61.6309C59.5284 62.5127 58.5099 63.0628 57.8198 62.5072L48.8714 55.3026C47.7095 54.6104 47.7095 53.3896 48.8714 52.6974Z" />
            </svg>
          </LinkWithIcon>
        </div>
      </div>
    </footer>
  )
}