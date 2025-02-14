import { useSelector } from "react-redux";
import logoImg from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router";
import { RootState } from "../store/store";
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { i18n, t } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const { cartItems } = useSelector((state: RootState) => state.cart);
  let len = Object.entries(cartItems).length;

  return (
    <header>
      <div className="nav-logo">
        <img src={logoImg} alt="Store" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to={"/"}>{t('home')}</Link>
          </li>
          <li>
            <Link to={"/products"}>{t("product_tab")}</Link>
          </li>
          <li>
            <Link to={"/cart"}>
              <span className="material-symbols-outlined">shopping_cart</span>
              {len > 0 && <span className="len">{len}</span>}
            </Link>
          </li>
          <li className="lang">
            <button className="intl">
              <span className="material-symbols-outlined">language</span>
            </button>
            <span className="dialog">
              <ul>
                <li onClick={() => changeLanguage('en')}>English</li>
                <li onClick={() => changeLanguage('hi')}>Hindi(हिन्दी)</li>
                <li onClick={() => changeLanguage('fr')}>French(français)</li>
                <li onClick={() => changeLanguage('de')}>German(Deutsch)</li>
                <li onClick={() => changeLanguage('es')}>Spanish(Español)</li>
                <li onClick={() => changeLanguage('it')}>Italian(Italiano)</li>
                <li onClick={() => changeLanguage('ru')}>Russian(Русский)</li>
                <li onClick={() => changeLanguage('pt')}>Portuguese(Português)</li>
                <li onClick={() => changeLanguage('ja')}>Japanese(日本語)</li>
                <li onClick={() => changeLanguage('zh')}>Chinese(中国人)</li>
              </ul>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;