import img1 from "../../assets/homeImages/img1.png";
import "./Home.css";
import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation();
  return (
    <div className="home-cont bg-blue-200 m-4 ">
      <img src={img1} alt="Image 1" className="home-img" />
      <p className="home-text">
        {t("shop_best")}<br />
        STORE
      </p>
    </div>
  );
}

export default Home;
